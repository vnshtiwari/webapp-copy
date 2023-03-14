import React, { useState, Suspense, useEffect } from "react";
import NavBar from "./NavBar";
// import BasicInfo from "./BasicInfo";
// import ContactInfo from "./ContactInfo";
// import InsuranceQuestionnair from "./InsuranceQuestionnaire";
// import Plans from "./Plans";
// import Ekyc from "./Ekyc";
import policyIssuance from "./PolicyIssuance";

import PubSub from "pubsub-js";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Button from "@mui/material/Button";

// import BasicInfo from "./BasicInfo";
// const BasicInfo = React.lazy(() => import("./BasicInfo"));
const ContactInfo = React.lazy(() => import("./ContactInfo"));
const PersonalisedQuote = React.lazy(() => import("./PersonalisedQuote"));

const InsuranceQuestionnair = React.lazy(() =>
  import("./InsuranceQuestionnaire")
);

const Plans = React.lazy(() => import("./Plans"));
const Ekyc = React.lazy(() => import("./Ekyc"));
import { ReferenceName } from "../constants.js";
import img from "../assets/images/video-divider-white.png";
import CircularProgress from "@mui/material/CircularProgress";

import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

import "./home.css";
import PolicyIssuance from "./PolicyIssuance";
import Proposal from "./Proposal";
import Payment from "./Payment";

export default function Home(props) {
  const navigate = useNavigate();

  const [messages, setMessages] = useState([]);

  const handleNewMessage = (event) => {
    setMessages(event.detail);
  };

  useEffect(() => {
    window.addEventListener("message", handleNewMessage);
  }, [handleNewMessage]);

  useEffect(() => {
    console.log(props);
  }, []);

  let [step, setStep] = useState(0);
  let [basicData, setBasicData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
  });

  let [contactData, setContactData] = useState({
    mobile: "",
    pincode: "",
  });

  let [selectedPlan, setSelectedPlan] = useState(null);

  let [ekycData, setEkycData] = useState({
    aadharEkyc: "",
    pan: "",
    aadharUpload: "",
    panUpload: "",
  });

  const [state, setState] = useState({
    Self: false,
    Mother: false,
    Father: false,
    Spouse: false,
    Son: false,
    Daughter: false,
    "Mother-in-law": false,
    "Faher-in-law": false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { gilad, jason, antoine } = state;

  let [plan, setPlan] = useState([]);
  let [p, setP] = useState("");

  let [policyStatus, setPolicyStatus] = useState("");

  let [amount, setAmount] = useState(0);

  const [isLoader, setLoader] = useState(false);
  let [insPartyDetails, setInsPartyDetails] = useState({});

  let [error, setError] = useState({
    firstName: null,
    lastName: null,
    dob: null,
    gender: null,
    email: null,
    mobile: null,
    aadharContact: null,
    aadharEkyc: null,
    pan: null,
  });

  function validate(step, keyParam) {
    let data = ekycData;
    if (step == 0) data = contactData;
    else if (step == 1) data = basicData;

    let isError = false;

    function validateField(key) {
      if (data[key] == "" && key != "lastName") {
        error[key] = `${[key]} can not be blank`;
        isError = true;
      } else if (
        key == "email" &&
        !String(data[key])
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )
      ) {
        error[key] = `Not a valid email address`;
        isError = true;
      } else if (
        key == "mobile" &&
        !String(data[key])
          .toLowerCase()
          .match(/^[0]?[6789]\d{9}$/)
      ) {
        error[key] = `Not a valid mobile  number`;
        isError = true;
      } else if (
        (key == "aadharContact" || key == "aadharEkyc") &&
        !String(data[key])
          .toLowerCase()
          .match(/^\d{4}\d{4}\d{4}$/)
      ) {
        error[key] = `Not a valid aadhar  number`;
        isError = true;
      } else if (
        key == "pan" &&
        !String(data[key])
          .toLowerCase()
          .match(/^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/)
      ) {
        error[key] = `Not a valid PAN`;
        isError = true;
      } else if (key == "pincode" && String(data[key]).length != 6) {
        error[key] = `Not a valid PIN Code`;
        isError = true;
      } else error[key] = null;
    }

    if (keyParam == undefined) {
      for (let key in data) {
        validateField(key);
      }
    } else {
      validateField(keyParam);
    }

    setError({ ...error });
    if (isError) return false;
    else return true;
  }

  const handleClose = () => {
    debugger;
    setOpen(false);
  };

  let [errMsg, setErr] = useState("");
  function setErrMsg(err) {
    setErr(err);
    setOpen(true);
  }

  const [open, setOpen] = useState(false);

  const fallback = (
    <CircularProgress
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        color: "#ed1b2e",
        zIndex: "100",
      }}
    />
  );

  return (
    <>
      {!props.disableHeader && <NavBar />}
      <div className="test"> {messages}</div>
      <CircularProgress
        sx={{ display: isLoader ? "block" : "none" }}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          color: "#ed1b2e",
        }}
      />
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>{errMsg}</DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
      {/* <section data-v-70391ab4="" class="mb-4 banner primary">
        <h1 data-v-70391ab4="" class="top-heading">
          Get protected in mins
        </h1>
        <div class="promo-div ab-block banner-container text-center">
          Use <div class="code">PHIL</div> to get 25% off with a min premium of
          ₹1000 only.
          <br /> Promo ends in: <span class="countdown">4 days</span>
        </div>
        <img src={img} class="image-divider" />
      </section>  */}
      <Routes>
        <Route path="/quote">
          <Route
            path="contactInfo"
            element={
              <Suspense fallback={fallback}>
                <ContactInfo
                  contactData={contactData}
                  setContactData={setContactData}
                  setPlan={setPlan}
                  error={error}
                  validate={validate}
                  setLoader={setLoader}
                  setErrMsg={setErrMsg}
                ></ContactInfo>
              </Suspense>
            }
          />
          <Route
            path="insuranceQuestionnaire"
            element={
              <Suspense fallback={fallback}>
                <InsuranceQuestionnair
                  setLoader={setLoader}
                  setErrMsg={setErrMsg}
                  setPolicyStatus={setPolicyStatus}
                />
              </Suspense>
            }
          />
          <Route
            path="plans"
            element={
              <Suspense fallback={fallback}>
                <Plans
                  planList={plan}
                  plan={p}
                  setPlan={setP}
                  amount={amount}
                  setAmount={setAmount}
                  setSelectedPlan={setSelectedPlan}
                  handleChange={handleChange}
                  state={state}
                  setLoader={setLoader}
                  setErrMsg={setErrMsg}
                  selectedPlan={selectedPlan}
                />
              </Suspense>
            }
          />

          <Route
            path="personalisedQuote"
            element={
              <Suspense fallback={fallback}>
                <PersonalisedQuote
                  selectedPlan={selectedPlan}
                  plan={p}
                  setPlan={setP}
                  amount={amount}
                  setAmount={setAmount}
                  setLoader={setLoader}
                  setErrMsg={setErrMsg}
                />
              </Suspense>
            }
          />
          <Route
            path="ekyc"
            element={
              <Suspense fallback={fallback}>
                <Ekyc
                  ekycData={ekycData}
                  setEkycData={setEkycData}
                  error={error}
                  validate={validate}
                  amount={amount}
                  setLoader={setLoader}
                  setErrMsg={setErrMsg}
                  basicData={basicData}
                  setBasicData={setBasicData}
                />
              </Suspense>
            }
          />
          <Route
            path="policyIssuance"
            element={
              <Suspense fallback={fallback}>
                <PolicyIssuance policyStatus={policyStatus} />
              </Suspense>
            }
          />
          <Route
            path="proposal"
            element={
              <Suspense fallback={fallback}>
                <Proposal
                  ekycData={ekycData}
                  setEkycData={setEkycData}
                  error={error}
                  validate={validate}
                  amount={amount}
                  insParty={state}
                  setLoader={setLoader}
                  setErrMsg={setErrMsg}
                  basicData={basicData}
                  contactData={contactData}
                  setInsPartyDetails={setInsPartyDetails}
                  insPartyDetails={insPartyDetails}
                />
              </Suspense>
            }
          />

          <Route
            path="payment"
            element={
              <Suspense fallback={fallback}>
                <Payment
                  ekycData={ekycData}
                  setEkycData={setEkycData}
                  error={error}
                  validate={validate}
                  amount={amount}
                  setLoader={setLoader}
                  setErrMsg={setErrMsg}
                  setBasicData={setBasicData}
                />
              </Suspense>
            }
          />

          <Route
            path=""
            element={<Navigate replace to="contactInfo" />}
          ></Route>
        </Route>
      </Routes>
    </>
  );
}
