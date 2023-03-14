import { React, useEffect, useState } from "react";

export default function PolicyIssuance({ policyStatus }) {
  const [message, setMessage] = useState("");
  function processStatus(status) {
    const ACCEPTED =
      "Congratulations! Your policy has been generated. Polcy details are shared on your registered mobile number and email.";
    const ACCEPTED_LOADING =
      "Dear customer, based on the risk assessed we would like to collect a further payment of 1000rs. We have sent a payment link on your registered mobile number and email. Kindly confirm and pay!";
    const ACCEPTED_EXCLUSION =
      "Dear customer, we are happy to issue you the policy for the selected product. However, we are excluding some of the policy benefits based on the assessed risk. Details are shared on your email and registered email and mobile. Please confirm to proceed.";
    const ACCEPTED_LOADING_EXCLUSION =
      "Dear customer, based on the risk assessed we would like to collect a further payment of 1000rs. We have sent a payment link on your registered mobile number and email. We are also excluding some of the policy benefits based on the assessed risk Kindly confirm and pay!";
    const DECLINED =
      "Dear customer, we are unable to issue an policy to you at this moment;";

    const statusId = status;
    if (statusId === "accepted") {
      const message = ACCEPTED;
      const policyId = `SAHI_${Math.floor(Math.random() * 1000000000)}`;
      const currentDate = new Date();
      const startDate = currentDate.toDateString();
      const currYear = currentDate.getFullYear();
      const policyYear = currYear + 1;
      const endDate = new Date(
        currentDate.setFullYear(policyYear)
      ).toDateString();

      // display this on the screen
      return {
        message,
        policyId,
        startDate,
        endDate,
      };
    } else if (statusId === "acceptedWithLoading") {
      const message = ACCEPTED_LOADING;

      // display this on the screen
      return {
        message,
      };
    } else if (statusId === "acceptedWithExclusion") {
      const message = ACCEPTED_EXCLUSION;

      // display this on the screen
      return {
        message,
      };
    } else if (statusId == "acceptedWithLoadingAndExclusion") {
      const message = ACCEPTED_LOADING_EXCLUSION;

      // display this on the screen
      return {
        message,
      };
    } else if (statusId == "declined") {
      const message = DECLINED;

      // display this on the screen
      return {
        message,
      };
    } else {
      // display this on the screen
      return {
        message:
          "Dear customer, your policy issuance is deferred at the moment. We will reach out to you to with further details.",
      };
    }
  }

  useEffect(() => {
    let msg = processStatus(policyStatus);
    setMessage(msg);
    gtag("event", "policy_generated");
  }, []);
  return (
    <section style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          "box-shadow": "rgba(0, 0, 0, 0.15) 0px 79px 158px 0px",
          margin: "20px",
          padding: "20px",
          maxWidth: "600px",
          display: policyStatus != "Accepted" ? "block" : "none",
        }}
      >
        {message.message}
        {message.policyId && (
          <>
            <div>Policy id : {message.policyId}</div>
            <div>Policy start date : {message.startDate}</div>
            <div>Policy end date : {message.endDate}</div>
          </>
        )}
      </div>
      {/* <div
        class="page"
        style={{
          "box-shadow": "rgba(0, 0, 0, 0.15) 0px 79px 158px 0px",
          margin: "20px",
          padding: "20px",
          maxWidth: "600px",
          display: policyStatus == "Accepted" ? "block" : "none",
        }}
      >
        <h2>Welcome!!</h2>
        <p>
          Congratulations! You got yourself a Prudentual Health Insurance Policy
          for your home at <b>5 Crosby St. New York, NY 10013</b>. Your policy
          number is <b>LP234F32</b>.
        </p>
        <p>
          We want to make sure you know what you’re getting for your{" "}
          <b>$5.20 per month</b>, so we did our best to make this policy short
          and sweet.
        </p>
        <p>
          Please take a few minutes to read through, and{" "}
          <a data-tip="In the real doc, this will allow you to get in touch with us directly">
            let us know
          </a>{" "}
          if you have any questions. You can always <a>change coverages</a>,{" "}
          <a>add valuable items</a>, and more.
        </p>
        <h3>Who’s covered?</h3>
        <p>
          This policy covers <b>Jane Doe</b>. You can add more people, as long
          as they permanently live at 5 Crosby Street.
        </p>
        <h3>When?</h3>
        <p>
          This policy covers events that started after March 12, 2017 at 1:30pm,
          and before March 12, 2018, 1:30pm.
        </p>
        <h3>Against what?</h3>
        <p>
          We protect you against theft, vandalism, fire, smoke, burst pipes,
          appliance leaks, and damage others may accuse you of causing. There
          are important limitations, though, so please read on.
        </p>
        <h3>For how much?</h3>
        <p>
          We provide coverage up to a certain limit. Here is a quick overview of
          the limits you chose (and can <a>change</a>):
        </p>
        <ul>
          <li>
            Damage or theft of your stuff, up to $10,000 in total, and $2,500
            per item.
          </li>
          <li>
            Temporary living expenses if your home becomes unlivable, up to
            $2,500.
          </li>
          <li>Damage to other people, up to $100,000</li>
        </ul>
      </div> */}
    </section>
  );
}
