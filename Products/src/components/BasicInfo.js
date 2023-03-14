import React, { useEffect, useState } from "react";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useNavigate } from "react-router-dom";
import ManIcon from "@mui/icons-material/Man";
import WomanIcon from "@mui/icons-material/Woman";
import TransgenderIcon from "@mui/icons-material/Transgender";
import moment from "moment";

import style from "./styles/basic-info.module.css";

export default function BasicInfo({
  basicData,
  setBasicData,
  error,
  validate,
}) {
  let navigate = useNavigate();

  const selectGender = (gender) => {
    basicData["gender"] = gender;
    setBasicData({ ...basicData });
    validate(1, "gender");
  };
  function next() {
    if (validate(1)) {
      navigate("../insuranceQuestionnaire");
    }
  }

  let [date, setDate] = useState(null);
  return (
    <section class="chat-container">
      <span>
        <div class="questions-container user_name">
          <div class=" cGIqAI dmGYTj hTEcPe chat-question-inner user_name  text_single ">
            <h3 class=" fFoQAK">
              Great! Applying for health insurance takes only 5 minutes. Ready
              to go?
            </h3>
            {/* <form autoComplete="off" className="bcuijq">
              <div className="text-question-container"> */}
            <div className={style.contactFormContainer}>
              <div className="input-container  text">
                <TextField
                  label="First Name"
                  variant="outlined"
                  error={error["firstName"] != null}
                  helperText={error["firstName"]}
                  value={basicData["firstName"]}
                  onChange={(e) => {
                    basicData["firstName"] = e.target.value;
                    setBasicData({ ...basicData });
                  }}
                  onBlur={(e) => {
                    validate(1, "firstName");
                  }}
                  inputProps={{
                    autocomplete: "off",
                  }}
                  required
                  fullWidth
                  spellCheck={false}
                />
              </div>
              <div class="input-container  mt30 text">
                <TextField
                  label="Middle and Last Name"
                  variant="outlined"
                  value={basicData["lastName"]}
                  error={error["lastName"] != null}
                  helperText={error["lastName"]}
                  onChange={(e) => {
                    basicData["lastName"] = e.target.value;
                    setBasicData({ ...basicData });
                  }}
                  inputProps={{
                    autocomplete: "off",
                  }}
                  fullWidth
                  spellCheck={false}
                />
              </div>
              <div className="mt30">
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    className="fullwidth"
                    label="Date of Birth"
                    value={basicData["dob"]}
                    onChange={(newValue) => {
                      setDate(newValue);
                      basicData["dob"] = newValue;
                      setBasicData({ ...basicData });
                      validate(1, "dob");
                    }}
                    inputProps={{
                      autocomplete: "off",
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        error={error["dob"] != null}
                        helperText={error["dob"]}
                        fullWidth
                        value={basicData["dob"]}
                        required
                      />
                    )}
                  />
                </LocalizationProvider>
              </div>

              <div className="mt30">
                <FormControl
                  sx={{ width: "100%" }}
                  required
                  error={error["gender"] != null}
                >
                  <FormLabel id="demo-row-radio-buttons-group-label">
                    Gender
                  </FormLabel>
                  <div className={`mt10 ${style.genderList}`}>
                    <div onClick={(e) => selectGender("Women")}>
                      <WomanIcon
                        className={
                          basicData["gender"] == "Women" ? style.active : null
                        }
                      />
                      <p>Women</p>
                    </div>
                    <div onClick={(e) => selectGender("Man")}>
                      <ManIcon
                        className={
                          basicData["gender"] == "Man" ? style.active : null
                        }
                      />
                      <p>Man</p>
                    </div>
                    <div onClick={(e) => selectGender("Other")}>
                      <TransgenderIcon
                        className={
                          basicData["gender"] == "Other" ? style.active : null
                        }
                      />
                      <p>Other</p>
                    </div>
                  </div>
                </FormControl>
              </div>
            </div>
          </div>
          {/* </form>
          </div> */}
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
