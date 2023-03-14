import { useState, useEffect } from "react";
import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Email from "@mui/icons-material/Email";
import ContactPhone from "@mui/icons-material/ContactPhone";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useNavigate } from "react-router-dom";
import style from "./styles/basic-info.module.css";
import OtpInputBox from "./common/OtpInput";
import Divider from "@mui/material/Divider";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import { mobileCheck } from "../utility/common";
import { firebase, auth } from "../firebase";
// import Claims from "home/Claims";
// const PurposeDetail = React.lazy(() => import("home/PurposeDetail"));

export default function ContactInfo({
  contactData,
  setContactData,
  setPlan,
  error,
  validate,
  setLoader,
}) {
  let [isEmailOtpActive, setEmailOtpActive] = useState(false);
  let [isMobileOtpActive, setMobileOtpActive] = useState(false);
  let [isAadharOtpActive, setAadharOtpActive] = useState(false);

  let [isEmailVarified, setEmailVerified] = useState(false);
  let [isMobileVarified, setMobileVerified] = useState(false);
  let [isAadharVerified, setAadharVerified] = useState(false);

  let [emailOtp, setEmailOtp] = useState("");
  let [mobileOtp, setMobileOtp] = useState("");
  let [aadharOtp, setAadharOtp] = useState("");

  const [payload, setPayload] = useState(null);

  const [final, setfinal] = useState(null);

  useEffect(() => {
    if (emailOtp.length == 6) setEmailVerified(true);
  }, [emailOtp]);

  useEffect(() => {
    gtag("event", "contact_info_init");
  }, []);

  // useEffect(() => {
  //   const mojoauth = new MojoAuth("test-70d678ab-4b55-4445-9b2e-040ba352a6ce", {
  //     source: [{ type: "phone", feature: "otp" }],
  //   });
  //   mojoauth.signIn().then((payload) => {
  //     setPayload(payload);
  //     document.getElementById("mojoauth-passwordless-form").remove();
  //   });
  // }, []);

  useEffect(() => {
    if (final == "") {
      let verify = new firebase.auth.RecaptchaVerifier("recaptcha-container");
      auth
        .signInWithPhoneNumber("+91" + contactData["mobile"], verify)
        .then((result) => {
          setfinal(result);
          setMobileOtpActive(true);
        })
        .catch((err) => {
          alert(err);
        });
    }
  }, [final]);

  useEffect(() => {
    if (mobileOtp.length == 6) {
      final
        .confirm(mobileOtp)
        .then((result) => {
          setMobileVerified(true);
        })
        .catch((err) => {
          alert("Wrong code");
        });
    }
  }, [mobileOtp]);
  useEffect(() => {
    if (aadharOtp.length == 6) setAadharVerified(true);
  }, [aadharOtp]);

  let navigate = useNavigate();
  async function next() {
    if (validate(0, "mobile") && validate(0, "pincode")) {
      console.log(contactData);

      setLoader(true);

      debugger;

      const rawResponse = await fetch(
        "https://sahi-backend-dnhiaxv6nq-el.a.run.app/api/v1/sahi/quote/request",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(contactData),
        }
      );
      const content = await rawResponse.json();
      setLoader(false);

      setPlan([...content.quote]);
      gtag("event", "contact_info_done");

      navigate("../plans");
    }
  }
  return (
    <section class="chat-container">
      <span>
        <div class="questions-container user_name">
          <div class=" cGIqAI dmGYTj hTEcPe chat-question-inner user_name  text_single ">
            <h3 class=" fFoQAK">Welcome! Start your insurance journey</h3>

            <div className={style.basicDetailContainer}>
              <div class="input-container  mt30 text">
                <TextField
                  id="filled-basic"
                  fullWidth
                  label="Mobile No."
                  variant="outlined"
                  value={contactData["mobile"]}
                  onChange={(e) => {
                    setMobileOtpActive(false);
                    setMobileVerified(false);
                    contactData["mobile"] = e.target.value.slice(0, 10);
                    setContactData({ ...contactData });
                  }}
                  onBlur={(e) => {
                    validate(0, "mobile");
                  }}
                  error={error["mobile"] != null}
                  helperText={error["mobile"]}
                  spellCheck={false}
                  type="number"
                  required
                  inputProps={{
                    maxlength: 13,
                    autocomplete: "off",
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <ContactPhone />{" "}
                        <span className="prefix-code">+91</span>
                      </InputAdornment>
                    ),
                  }}
                />
              </div>

              <div class="input-container  mt30 text">
                <TextField
                  id="filled-basic"
                  fullWidth
                  label="Pin code"
                  variant="outlined"
                  value={contactData["pincode"]}
                  onChange={(e) => {
                    setMobileOtpActive(false);
                    setMobileVerified(false);
                    contactData["pincode"] = e.target.value.slice(0, 6);
                    setContactData({ ...contactData });
                  }}
                  onBlur={(e) => {
                    validate(0, "pincode");
                  }}
                  error={error["pincode"] != null}
                  helperText={error["pincode"]}
                  spellCheck={false}
                  type="number"
                  required
                  inputProps={{
                    maxlength: 6,
                    autocomplete: "off",
                  }}
                />
              </div>
              {final == "" && (
                <div
                  style={{ marginTop: "30px" }}
                  id="recaptcha-container"
                ></div>
              )}
            </div>
          </div>
          <div class="submit-wrap align-center">
            <Button
              variant="contained"
              onClick={next}
              color="error"
              endIcon={<SendIcon />}
            >
              Next
            </Button>
          </div>
        </div>
      </span>
    </section>
  );
}
