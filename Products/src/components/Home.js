import React, { useState, Suspense } from "react";
import NavBar from "./NavBar";
// import BasicInfo from "./BasicInfo";
// import ContactInfo from "./ContactInfo";
// import InsuranceQuestionnair from "./InsuranceQuestionnaire";
// import Plans from "./Plans";
// import Ekyc from "./Ekyc";
import policyIssuance from "./PolicyIssuance";

// import BasicInfo from "./BasicInfo";
const BasicInfo = React.lazy(() => import("./BasicInfo"));
const ContactInfo = React.lazy(() => import("./ContactInfo"));
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

export default function Home() {
  const navigate = useNavigate();

  let [step, setStep] = useState(0);
  let [basicData, setBasicData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
  });

  let [contactData, setContactData] = useState({
    email: "",
    mobile: "",
    aadharContact: "",
  });

  let [ekycData, setEkycData] = useState({
    aadharEkyc: "",
    pan: "",
    aadharUpload: "",
    panUpload: "",
  });
  let [plan, setPlan] = useState("");
  let [amount, setAmount] = useState(null);

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
        error[key] = `${ReferenceName[key]} can not be blank`;
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

  const fallback = (
    <CircularProgress
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        color: "#ed1b2e",
      }}
    />
  );

  return (
    <>
      <NavBar />
      <section data-v-70391ab4="" class="mb-4 banner primary">
        <h1 data-v-70391ab4="" class="top-heading">
          Get protected in mins
        </h1>
        <div class="promo-div ab-block banner-container text-center">
          Use <div class="code">PHIL</div> to get 25% off with a min premium of
          ₹1000 only.
          <br /> Promo ends in: <span class="countdown">4 days</span>
        </div>
        <img src={img} class="image-divider" />
      </section>
      <Routes>
        <Route path="/products">
          <Route
            path="basicDeails"
            element={
              <Suspense fallback={fallback}>
                <BasicInfo
                  basicData={basicData}
                  setBasicData={setBasicData}
                  error={error}
                  validate={validate}
                ></BasicInfo>
              </Suspense>
            }
          />
          <Route
            path="contactInfo"
            element={
              <Suspense fallback={fallback}>
                <ContactInfo
                  contactData={contactData}
                  setContactData={setContactData}
                  error={error}
                  validate={validate}
                ></ContactInfo>
              </Suspense>
            }
          />
          <Route
            path="insuranceQuestionnaire"
            element={
              <Suspense fallback={fallback}>
                <InsuranceQuestionnair />{" "}
              </Suspense>
            }
          />
          <Route
            path="plans"
            element={
              <Suspense fallback={fallback}>
                <Plans
                  plan={plan}
                  setPlan={setPlan}
                  amount={amount}
                  setAmount={setAmount}
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
                />
              </Suspense>
            }
          />
          <Route
            path="policyIssuance"
            element={
              <Suspense fallback={fallback}>
                <PolicyIssuance />
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
