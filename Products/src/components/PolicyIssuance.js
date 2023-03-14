import { React, useState } from "react";

export default function PolicyIssuance() {
  return (
    <section style={{ display: "flex", justifyContent: "center" }}>
      <div
        class="page"
        style={{
          "box-shadow": "rgba(0, 0, 0, 0.15) 0px 79px 158px 0px",
          margin: "20px",
          padding: "20px",
          maxWidth: "600px",
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
      </div>
    </section>
  );
}
