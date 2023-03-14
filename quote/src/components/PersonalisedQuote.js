import { React, useEffect, useState } from "react";
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

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Typography from "@mui/material/Typography";
import ListItemButton from "@mui/material/ListItemButton";

import style from "./styles/basic-info.module.css";

import "./home.css";
import "./styles/plans.module.css";

export default function Plans({
  selectedPlan,
  plan,
  amount,
  setPlan,
  setAmount,
  setLoader,
}) {
  let [planBenefits, setPlanBenefits] = useState([]);
  let [planId, setPlanId] = useState(null);

  let [selectedAddsOns, setSelectedAddsOns] = useState([]);

  function selectAddsOns(item) {
    if (!selectedAddsOns.includes(item.name)) {
      selectedAddsOns.push(item.name);
      setSelectedAddsOns([...selectedAddsOns]);
      setAmount(amount + item.amount);
    } else {
      selectedAddsOns.splice(selectedAddsOns.indexOf(item.name), 1),
        setSelectedAddsOns([...selectedAddsOns]);
      setAmount(amount - item.amount);
    }
  }

  let navigate = useNavigate();
  function selectCard(name, amount, productId) {
    if (name == plan) {
      setPlan("");
      setAmount(null);
      return;
    }
    setPlan(name);
    setPlanId(productId);
    setAmount(amount);
  }

  function buyNow() {
    gtag("event", "personalise_quote_done");
    navigate("../ekyc");
  }

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const names = ["Self", "Mother", "Father", "Spouse", "Children"];

  function createData(benefitName, cover) {
    return { benefitName, cover };
  }
  useEffect(() => {
    gtag("event", "personalise_quote_init");
  }, []);

  const [personName, setPersonName] = useState([]);
  const [gender, setGender] = useState("");

  const selectGender = (gender) => {
    setGender(gender);
  };

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <section className="plan-container">
      <div>
        <Grid
          container
          sx={{
            marginTop: 10,
          }}
          justifyContent="space-around"
        >
          <Grid key={selectedPlan.productId} item>
            <Typography gutterBottom variant="subtitle1" component="div">
              {selectedPlan.productName}
            </Typography>

            <Typography variant="body2" gutterBottom>
              {selectedPlan.productDescription}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              ID: {selectedPlan.productId}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              $ {selectedPlan.amount}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Benefits
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <ul>
                {selectedPlan.productFeatures.map((pf) => {
                  return <li key={pf}>{pf}</li>;
                })}
              </ul>
            </Typography>
          </Grid>

          <Grid item>
            <Typography gutterBottom variant="h6">
              AddOns
            </Typography>

            <List>
              {selectedPlan.addsOns.map((item) => {
                return (
                  <ListItem key={item.name}>
                    <ListItemButton onClick={() => selectAddsOns(item)}>
                      <ListItemIcon>
                        {!selectedAddsOns.includes(item.name) ? (
                          <AddIcon />
                        ) : (
                          <RemoveIcon />
                        )}
                      </ListItemIcon>
                    </ListItemButton>

                    <ListItemText
                      primary={`₹ ${item.amount}        ${item.name}`}
                    />
                  </ListItem>
                );
              })}
            </List>
          </Grid>
        </Grid>

        <Grid
          container
          sx={{
            marginTop: 10,
          }}
          justifyContent="center"
        >
          <Grid
            key={selectedPlan.productId}
            sx={{
              width: 300,
            }}
            item
          >
            <div className="quote-gen">
              <Typography gutterBottom variant="subtitle1" component="div">
                Plan Selected
              </Typography>

              <Typography
                gutterBottom
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                {selectedPlan.productName}
              </Typography>
            </div>

            <div className="quote-gen">
              <Typography gutterBottom variant="subtitle1" component="div">
                AddOns
              </Typography>
              <Typography color="text.secondary" component="div">
                {selectedAddsOns.join(", ")}
              </Typography>
            </div>

            <div className="quote-gen">
              <Typography gutterBottom variant="subtitle1" component="div">
                Net premium
              </Typography>
              <Typography color="text.secondary" component="div">
                {"₹ " + (amount * 82) / 100}
              </Typography>
            </div>

            <div className="quote-gen">
              <Typography gutterBottom variant="subtitle1" component="div">
                GST (18%)
              </Typography>
              <Typography color="text.secondary" component="div">
                {"₹ " + (amount * 18) / 100}
              </Typography>
            </div>

            <div className="quote-gen">
              <Typography gutterBottom variant="subtitle1" component="div">
                Total Premium
              </Typography>
              <Typography color="text.secondary" component="div">
                {"₹ " + amount}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </div>

      <div></div>

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
                <div className="premium-label">Total premium</div>
                <div className="premium-amount">Rs {amount}</div>
              </span>
              <Button
                onClick={buyNow}
                color="error"
                sx={{ borderRadius: "20px" }}
                size="large"
                variant="contained"
              >
                Proceed
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      )}
    </section>
  );
}
