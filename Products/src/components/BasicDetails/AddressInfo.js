import React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
// import PurposeDetail from "home/PurposeDetail";

export function AddressInfo() {
  return (
    <form autoComplete="off" className="bcuijq addressInfo question-form">
      <PurposeDetail></PurposeDetail>
      <Grid container spacing={2}>
        <Grid item md={8} xs={12}>
          <TextField label="Street and Number" fullWidth variant="outlined" />
        </Grid>
        <Grid item md={4} xs={12}>
          <TextField label="APT/UNIT #" fullWidth variant="outlined" />
        </Grid>
        <Grid item xs={12}>
          <TextField label="City" fullWidth variant="outlined" />
        </Grid>
        <Grid item md={4} xs={12}>
          <TextField label="State" fullWidth variant="outlined" />
        </Grid>
        <Grid item md={8} xs={12}>
          <TextField label="Zip Code" fullWidth variant="outlined" />
        </Grid>
      </Grid>
    </form>
  );
}
