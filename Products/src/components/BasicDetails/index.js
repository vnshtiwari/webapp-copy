import { React, useState } from "react";
import { BasicDetailsHeadings } from "../../constants";
import { BasicInfo } from "../BasicInfo";
import { AddressInfo } from "./AddressInfo";
import { ContactInfo } from "../ContactInfo";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { ReferenceName } from "../../constants.js";
import { useNavigate } from "react-router-dom";

export default function BasicDetails() {
  return (
    <section class="chat-container">
      <span>
        <div class="questions-container user_name">
          <div class=" cGIqAI dmGYTj hTEcPe chat-question-inner user_name  text_single ">
            <h3 class=" fFoQAK">{BasicDetailsHeadings[step]}</h3>
            {step == 0 && (
              <ContactInfo
                contactData={contactData}
                setContactData={setContactData}
                error={error}
              ></ContactInfo>
            )}
            {step == 1 && (
              <BasicInfo
                basicData={basicData}
                setBasicData={setBasicData}
                error={error}
              ></BasicInfo>
            )}
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
