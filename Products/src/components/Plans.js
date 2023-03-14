import { React, useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import { useNavigate } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";

import "./home.css";
import "./styles/plans.module.css";

export default function Plans({ plan, amount, setPlan, setAmount }) {
  let [planBenefits, setPlanBenefits] = useState([]);

  let navigate = useNavigate();
  function selectCard(name, amount) {
    if (name == plan) {
      setPlan("");
      setAmount(null);
      return;
    }
    setPlan(name);
    setAmount(amount);
    if (name == "Silver") {
      setPlanBenefits([...silverBenefits]);
    } else if (name == "Gold") {
      setPlanBenefits([...goldBenefits]);
    } else if (name == "Diamond") {
      setPlanBenefits([...diamondBenefits]);
    }
  }

  function buyNow() {
    navigate("../ekyc");
  }

  function createData(benefitName, cover) {
    return { benefitName, cover };
  }

  const silverBenefits = [
    createData("Kidney dialysis", 100000),
    createData("HIV / AIDS treatment", 50000),
    createData("Psychiatric treatment", 25000),
    createData("Congenital conditions manifesting 60 days after birth", 75000),
    createData("Hospital cash benefit", 50000),
    createData("Accidental death and disability", 250000),
  ];
  const goldBenefits = [
    createData("Kidney dialysis", 100000),
    createData("HIV / AIDS treatment", 50000),
    createData("Psychiatric treatment", 25000),
    createData("Congenital conditions manifesting 60 days after birth", 75000),
    createData("Hospital cash benefit", 50000),
    createData("Accidental death and disability", 250000),
    createData("Outpatient limit", 30000),
    createData("Consultations, medications, diagnostic tests", 30000),
    createData("Physiotherapy", 40000),
    createData("Psychiatric and psychological care", 30500),
    createData("Alternative medicine and treatment", 50000),
    createData("Routine health checks and vaccinations", "-"),
  ];
  const diamondBenefits = [
    createData("Kidney dialysis", 100000),
    createData("HIV / AIDS treatment", 50000),
    createData("Psychiatric treatment", 25000),
    createData("Congenital conditions manifesting 60 days after birth", 75000),
    createData("Hospital cash benefit", 50000),
    createData("Accidental death and disability", 250000),
    createData("Outpatient limit", 30000),
    createData("Consultations, medications, diagnostic tests", 30000),
    createData("Physiotherapy", 40000),
    createData("Psychiatric and psychological care", 30500),
    createData("Alternative medicine and treatment", 50000),
    createData("Routine health checks and vaccinations", "-"),
    createData("Alternative medicine and treatment", 50000),
    createData("Frames, lenses and eye checks", "-"),
  ];

  let benefitsList = [
    "Hospitalisation charges paid in full",
    "No Claim Bonus that doubles your annual limit if you do not make any hospitalisation claims for 2 years",
    "Additional annual limit for accidental claims with Reload Benefit if you exhaust your limit for the year",
    "Medical evacuation and repatriation, and 24/7 medical advice",
    "Cancer treatment and organ transplant paid in full",
    "Pre and post hospitalisation of up to 90 days",
    "Home nursing cover of up to 30 days",
    "Parent accommodation of S$250 per night",
    "Accidental dental treatment paid in full",
  ];

  const PlanBenefitsWrapper = () => {
    return (
      <div className="mt-30 selected-benefits">
        <div class="cp-col-policy">{`${plan} plan benefits`}</div>
        <TableContainer component={Paper}>
          <Table sx={{}} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Benefit</TableCell>
                <TableCell align="right">Coverage</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {planBenefits.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.benefitName}
                  </TableCell>
                  <TableCell align="right">{row.cover}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  };
  const CardWrapper = (props) => {
    let { name, benefits, amount } = props.data;
    return (
      <>
        <Grid key={amount} container>
          <Grid key={name} sx={3} item class="plan-item">
            <div class="plan-icon">
              <HealthAndSafetyIcon />
            </div>
          </Grid>
          <Grid sx={9} item class="combo-label">
            <h5>Inpatient Benefits</h5>
            <p>from: S$857.57</p>
          </Grid>
        </Grid>
      </>
    );
  };
  return (
    <section class="plans-layout chat-container">
      <span>
        <div class="layout mt-30 text-center column">
          <h2 class="text-center mb-2">I want to cover</h2>
          <p>select the plan which is most suitable for you</p>
        </div>
        <div className="plan-list">
          <Grid
            container
            sx={{
              maxWidth: "500px",
            }}
            justifyContent="center"
            spacing={5}
          >
            <Grid
              onClick={() => selectCard("Silver", "1500")}
              xs={4}
              item
              className="plan-item"
            >
              <div class="plan-icon">
                <HealthAndSafetyIcon
                  className={plan == "Silver" ? "active-plan" : null}
                />
              </div>
            </Grid>
            <Grid
              xs={8}
              onClick={() => selectCard("Silver", "1500")}
              item
              className="combo-label"
            >
              <h5>Silver Plan</h5>
              <p>₹ 1,500</p>
              <p className="plan-benefits">Hospital cash benefit of ₹50,000 </p>
              <p className="plan-benefits"> Accidental benefit of ₹2,50,000 </p>
              <div className="more-benefit">
                {`+${silverBenefits.length - 2}`} more benefits...
              </div>
            </Grid>

            {amount && plan == "Silver" && (
              <Grid item xs={12}>
                <PlanBenefitsWrapper />
              </Grid>
            )}

            <Grid
              onClick={() => selectCard("Gold", "2500")}
              xs={4}
              item
              className="plan-item"
            >
              <div class="plan-icon">
                <LocalHospitalIcon
                  className={plan == "Gold" ? "active-plan" : null}
                />
              </div>
            </Grid>

            <Grid
              onClick={() => selectCard("Gold", "2500")}
              xs={8}
              item
              className="combo-label"
            >
              <h5>Gold Plan</h5>
              <p>₹ 2,500</p>
              <p className="plan-benefits">
                Hospital cash benefit of ₹1,00,000{" "}
              </p>
              <p className="plan-benefits"> Accidental benefit of ₹5,00,000 </p>
              <div className="more-benefit">
                {`+${goldBenefits.length - 2}`} more benefits...
              </div>
            </Grid>
            {amount && plan == "Gold" && (
              <Grid item xs={12}>
                <PlanBenefitsWrapper />
              </Grid>
            )}

            <Grid
              onClick={() => selectCard("Diamond", "3500")}
              xs={4}
              item
              className="plan-item"
            >
              <div class="plan-icon">
                <MedicalInformationIcon
                  className={plan == "Diamond" ? "active-plan" : null}
                />
              </div>
            </Grid>

            <Grid
              onClick={() => selectCard("Diamond", "3500")}
              xs={8}
              item
              className="combo-label"
            >
              <h5>Diamond Plan</h5>
              <p>₹ 3,500</p>
              <p className="plan-benefits">
                Hospital cash benefit of ₹1,50,000
              </p>
              <p className="plan-benefits"> Accidental benefit of ₹7,50,000 </p>
              <div className="more-benefit">
                {`+${diamondBenefits.length - 2}`} more benefits...
              </div>
            </Grid>
            {amount && plan == "Diamond" && (
              <Grid item xs={12}>
                <PlanBenefitsWrapper />
              </Grid>
            )}
          </Grid>
        </div>

        <div className="mt-30 commmon-benefits">
          <div class="cp-col-policy">Benefits across all plans</div>

          <summary class="cp-col-benefit">
            <div class="cp-col">
              <List
                sx={{
                  width: "100%",
                  bgcolor: "background.paper",
                }}
              >
                {benefitsList.map((value) => {
                  const labelId = `checkbox-list-label-${value}`;

                  return (
                    <ListItem key={value}>
                      <ListItemIcon>
                        <CheckCircleRoundedIcon
                          style={{ color: "#ed1b2e" }}
                        ></CheckCircleRoundedIcon>
                      </ListItemIcon>
                      <ListItemText
                        color="text.secondary"
                        id={labelId}
                        secondary={`${value}`}
                      />
                    </ListItem>
                  );
                })}
              </List>
            </div>
          </summary>
        </div>
      </span>
      {amount && (
        <AppBar
          position="fixed"
          sx={{
            top: "auto",
            bottom: 0,
            color: "black",
            backgroundColor: "white",
          }}
        >
          <Toolbar style={{ "text-align": "right" }}>
            <div className="action-bar">
              <span className="premium">
                <div className="premium-label">Total Premium</div>
                <div className="premium-amount">Rs {amount}</div>
              </span>
              <Button
                onClick={buyNow}
                color="error"
                sx={{ borderRadius: "20px" }}
                size="large"
                variant="contained"
              >
                Buy now
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      )}
    </section>
  );
}
