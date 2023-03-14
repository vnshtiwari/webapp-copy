import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import navbar from "./styles/navbar.module.css";

export default function NavBar() {
  const [state, setState] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {[
          { name: "Home", url: "/home" },
          { name: "Products", url: "/products" },
          { name: "About Us", url: "/aboutUs" },
          { name: "Careers", url: "/career" },
          { name: "Join the WaitList", url: "/joinWaitList" },
          { name: "Support Prudentiul", url: "/about" },
          { name: "Search", url: "/about" },
          { name: "Sign Up", url: "/about" },
          { name: "Login", url: "/about" },
        ].map((item, index) => (
          <div key={index}>
            <ListItem disablePadding>
              <ListItemButton component="a" href={item.url}>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
            <Divider></Divider>
          </div>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: "#ed1b2e" }}>
        <Toolbar className={navbar.toolbar}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(!state)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            href="../home"
            variant="h6"
            component="a"
            sx={{ flexGrow: 1 }}
          >
            Prudential
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={state} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </div>
  );
}
