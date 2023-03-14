import { useEffect, useState, Suspense } from "react";
import React from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import SendIcon from "@mui/icons-material/Send";
import { useNavigate } from "react-router-dom";
import style from "./styles/basic-info.module.css";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CircularProgress from "@mui/material/CircularProgress";
const AddressInfo = React.lazy(() => import("Products/AddressInfo"));
// const Footer = React.lazy(() => import("AppFooter/Footer"));

// import AddressInfo from "Products/AddressInfo";

import "./ekyc.scss";
import ekyc from "./ekyc.module.css";
import "./home.css";

export default function Ekyc({
  ekycData,
  setEkycData,
  error,
  validate,
  amount,
  setErrMsg,
  basicData,
  setBasicData,
}) {
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",

    // These options are needed to round to whole numbers if that's what you want.
    minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  function loadPayment() {
    addPaytmScript(onScriptLoad);
  }

  useEffect(() => {
    gtag("event", "ekyc_init");
  }, []);

  function onScriptLoad() {
    // document.querySelector(".order-details").style.display = "none";
    var config = {
      root: "#checkout",
      flow: "DEFAULT",
      data: {
        orderId: "sahi-" + sessionStorage.getItem("proposalId"),
        token: localStorage.getItem("txnToken") /* update token value */,
        tokenType: "TXN_TOKEN",
        amount: amount /* update amount */,
      },
      merchant: {
        redirect: false,
      },
      handler: {
        notifyMerchant: function (eventName, data) {
          console.log("notifyMerchant handler function called");
          console.log("eventName => ", eventName);
          console.log("data => ", data);
        },
        transactionStatus: function (paymentStatus) {
          localStorage.setItem("paymentStatus", JSON.stringify(paymentStatus));
          const messageEl = document.querySelector(".message");
          const messageNode = document.createTextNode(paymentStatus.RESPMSG);
          if (paymentStatus.STATUS == "TXN_SUCCESS") {
            debugger;
            //messageEl.style.display = "none";
            //paytmScript.parentNode.removeChild(paytmScript);
            navigate("../proposal");
          } else {
            setErrMsg(paymentStatus);
          }
          //messageEl.appendChild(messageNode);
          //messageEl.style.display = "block";
        },
      },
    };
    if (window.Paytm && window.Paytm.CheckoutJS) {
      window.Paytm.CheckoutJS.onLoad(function excecuteAfterCompleteLoad() {
        // initialze configuration using init method
        window.Paytm.CheckoutJS.init(config)
          .then(function onSuccess() {
            // after successfully updating configuration, invoke JS Checkout
            window.Paytm.CheckoutJS.invoke();
          })
          .catch(function onError(error) {
            console.log("error => ", error);
          });
      });
    }
  }

  function addPaytmScript(callback) {
    var s = document.createElement("script");
    s.setAttribute(
      "src",
      "https://securegw-stage.paytm.in/merchantpgpui/checkoutjs/merchants/NaSqWx02851401972121.js"
    );
    s.onload = callback;
    document.body.appendChild(s);
    setPaytmScript(s);
  }

  function initiateTransaction() {
    const randNum = Math.floor(1000 + Math.random() * 9000);
    const orderId = `PYTM_SAHI_${randNum}`;
    const textNode = document.createTextNode(orderId);
    // document.getElementById("orderId").appendChild(textNode);
    localStorage.setItem("orderId", orderId);

    fetch(
      "https://sahi-backend-dnhiaxv6nq-el.a.run.app/api/v1/sahi/payment/initiate",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          orderId: "sahi-" + sessionStorage.getItem("proposalId"),
          customerId: sessionStorage.getItem("customerId"),
          amount: amount,
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("txnToken", data.result.body.txnToken);
        handleClickOpen();
        loadPayment();
      })
      .catch((err) => {
        console.log(err);
        setErrMsg(err);
      });
  }

  const loadScript = (src) => {
    return new Promise((resovle) => {
      const script = document.createElement("script");
      script.src = src;

      script.onload = () => {
        resovle(true);
      };

      script.onerror = () => {
        resovle(false);
      };

      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async (amount) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      return;
    }

    const options = {
      key: "rzp_test_0AWs9BOIkdhoVj",
      currency: "INR",
      amount: amount * 100,
      name: "Prudential Health Insurance",
      description: "Thanks for purchasing",
      image:
        "https://www.prudentialplc.com/~/media/Images/P/Prudential-V13/logo/updated-logo.png?h=200&iar=0&w=200",
      theme: {
        color: "#ed1b2e",
      },

      handler: function (response) {
        navigate("../insuranceQuestionnaire");
      },
      prefill: {
        name: "Prudential Health Insurance",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const navigate = useNavigate();

  function next() {
    validate(1);
    gtag("event", "ekyc_done");

    navigate("../proposal");
  }
  const [open, setOpen] = useState(false);
  const [paytmScript, setPaytmScript] = useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  function fileUpload(type, e) {
    debugger;
    setLoader(true);
    var data = new FormData();

    data.append("front_part", e.target.files[0]);

    fetch(
      `https://sahi-backend-dnhiaxv6nq-el.a.run.app/api/v1/sahi/verify/kyc?customerId=${sessionStorage.getItem(
        "customerId"
      )}`,
      {
        method: "POST",
        body: data,
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        ekycData[type] = res.result.data.id_no;

        setLoader(false);
        setEkycData({ ...ekycData });
        if (res.result.data.id_type == "AADHAAR") {
          let name = res.result.data.name;
          basicData["firstName"] = name.substring(0, name.indexOf(" "));
          basicData["lastName"] = name.substring(
            name.indexOf(" ") + 1,
            name.length
          );
          basicData["dob"] = res.result.data.dob;
          basicData["address"] = res.result.data.address;
          setBasicData({ ...basicData });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  const handleClose = () => {
    setOpen(false);
  };

  const [isLoader, setLoader] = useState(false);
  return (
    <section class="chat-container">
      <CircularProgress
        sx={{ display: isLoader ? "block" : "none" }}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          color: "#ed1b2e",
        }}
      />
      <span>
        <div class="questions-container user_name">
          <div class=" cGIqAI dmGYTj hTEcPe chat-question-inner user_name  text_single ">
            <h3 class=" fFoQAK">
              Provide your identity so that we can know you better
            </h3>
            <Dialog open={open} onClose={handleClose}>
              <DialogContent id="checkout"></DialogContent>
            </Dialog>

            <Suspense fallback={<p>loading...</p>}>
              <AddressInfo />
            </Suspense>
            <div className={style.basicDetailContainer}>
              <div class="input-container  text">
                <TextField
                  label="Aadhar Number"
                  variant="outlined"
                  required
                  disabled
                  fullWidth
                  type="number"
                  value={ekycData["aadharEkyc"]}
                  onBlur={(e) => {
                    validate(2, "aadharEkyc");
                  }}
                  inputProps={{
                    autocomplete: "off",
                  }}
                  onChange={(e) => {
                    ekycData["aadharEkyc"] = e.target.value.slice(0, 12);
                    setEkycData({ ...ekycData });
                  }}
                  error={error["aadharEkyc"] != null}
                  helperText={
                    error["aadharEkyc"]
                      ? error["aadharEkyc"]
                      : ekycData["aadharUpload"]
                      ? `${ekycData["aadharUpload"]} uploaded successfully`
                      : ""
                  }
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <FingerprintIcon />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <IconButton
                        color="primary"
                        aria-label="upload picture"
                        component="label"
                      >
                        <input
                          hidden
                          onChange={(e) => {
                            fileUpload("aadharEkyc", e);
                            // setEkycData({ ...ekycData });
                          }}
                          accept="image/*,pdf;capture=camera"
                          type="file"
                        />
                        <PhotoCamera />
                      </IconButton>
                    ),
                  }}
                />
              </div>
              {/* <div class="input-container  mt30 text">
                <TextField
                  label="PAN Number"
                  variant="outlined"
                  disabled
                  fullWidth
                  value={ekycData["pan"]}
                  spellCheck={false}
                  inputProps={{
                    autocomplete: "off",
                  }}
                  onChange={(e) => {
                    ekycData["pan"] = e.target.value.slice(0, 10).toUpperCase();
                    setEkycData({ ...ekycData });
                  }}
                  onBlur={(e) => {
                    validate(2, "pan");
                  }}
                  error={error["pan"] != null}
                  helperText={
                    error["pan"]
                      ? error["pan"]
                      : ekycData["panUpload"]
                      ? `${ekycData["panUpload"]} uploaded successfully`
                      : ""
                  }
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PermIdentityIcon />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <IconButton
                        color="primary"
                        aria-label="upload picture"
                        component="label"
                      >
                        <input
                          hidden
                          onChange={(e) => {
                            fileUpload("pan", e);

                            setEkycData({ ...ekycData });
                          }}
                          accept="image/*, pdf;capture=camera"
                          type="file"
                        />
                        <PhotoCamera />
                      </IconButton>
                    ),
                  }}
                />
              </div> */}
            </div>
          </div>

          <div class="submit-wrap align-center">
            <Button
              disabled={!(ekycData["aadharEkyc"] != "")}
              onClick={next}
              variant="contained"
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
