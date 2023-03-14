import React, { useState } from "react";
import style from "../styles/FooterStrip.module.css";

export default function FooterStrip() {
  let [isOpen, setOpen] = useState(true);
  return (
    <div
      style={{ display: isOpen ? "block" : "none" }}
      className={style.container}
    >
      <div className={style.container1}>
        <div className={style.txtFooter}>
          <p>Best health plan for you and your family.</p>
          <span>
            Starting from <span className={style.fontBig}>₹ 500/month</span>
          </span>
        </div>
        <div class="quotesButton hideThanks">
          <a
            className={style.footerBtn}
            href="/products"
            data-utm-campaign="sticky_form"
            data-source="Sticky"
            data-pagename="health-insurance-india"
          >
            View Plans
          </a>
        </div>
      </div>
      <div
        onClick={() => {
          setOpen(false);
          const customEvent = new CustomEvent("message", {
            detail: "Popup Closed",
          });
          window.dispatchEvent(customEvent);
        }}
        className={style.closePopup}
      >
        <div>x</div>
      </div>
      {/* <p class="tc">
        *All savings provided by insurers as per IRDAI approved insurance plan.
        Standard T&amp;C apply.
      </p> */}
    </div>
  );
}
