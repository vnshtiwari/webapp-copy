import React, { useState } from "react";
// import OtpInput from "react-otp-input";
import { Grid, Paper, Typography, Link } from "@mui/material";

export default function OtpInputBox({ callback }) {
  const [otp, setOtp] = useState("");
  const preventDefault = (event) => event.preventDefault();

  return (
    <Grid container direction="column" alignItems="center">
      <Grid item xs>
        <Grid container direction="column" alignItems="center">
          <Grid item xs>
            {/* <OtpInput
              value={otp}
              shouldAutoFocus={true}
              onChange={(otp) => {
                setOtp(otp);
                if (otp.length == 6) callback(otp);
              }}
              numInputs={6}
              inputStyle={{
                fontSize: "16px",
                width: "24px",
                height: "24px",
                margin: "4px",
                borderTop: "0px",
                borderLeft: "0px",
                borderRight: "0px",
                outline: "none",
                borderColor: "#000a46",
              }}
              containerStyle={{
                "margin-top": "20px",
                padding: "10px",
              }}
              isInputNum
            /> */}
          </Grid>
          <Grid item xs>
            <Typography variant="caption" display="block" gutterBottom>
              Didn't get a code ? &nbsp;
              <Link href="#" onClick={preventDefault}>
                Send Again
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
