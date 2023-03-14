import { React, useEffect, useState } from "react";
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

import "./ekyc.scss";
import ekyc from "./ekyc.module.css";
import "./home.css";

export default function Payment({
  ekycData,
  setEkycData,
  error,
  validate,
  amount,
  setErrMsg,
}) {
  function loadPayment() {
    addPaytmScript(onScriptLoad);
  }

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
            gtag("event", "payment_done");

            navigate("../insuranceQuestionnaire");
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
            setLoader(false);
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
    setLoader(true);
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

  const navigate = useNavigate();

  useEffect(() => {
    initiateTransaction();
    gtag("event", "payment_init");
  }, []);

  const [open, setOpen] = useState(false);
  const [paytmScript, setPaytmScript] = useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

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
            <h3 class=" fFoQAK">Pay for your insurance</h3>

            <div id="checkout"></div>

            {/* <Dialog open={open} onClose={handleClose}>
              <DialogContent id="checkout"></DialogContent>
            </Dialog> */}
          </div>
        </div>
      </span>
    </section>
  );
}
