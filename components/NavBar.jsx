import { AppBar, Collapse, IconButton, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useEffect, useState } from "react";
import SimpleMenu from "./SimpleMenu";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  Navbar: {
    background: "none",
    fontWeight: "800",
    fontFamily: "Nunito",
  },
  appbarwrapper: {
    width: "80%",
    margin: "0 auto",
  },
  appTitle: {
    flexGrow: "1",
    fontSize: "2rem",
    cursor: "pointer",
  },
  colorText: {
    color: "#fff",
  },
}));

export default function NavBar() {
  const classes = useStyles();
  return (
    <AppBar className={classes.Navbar} elevation={0}>
      <Toolbar className={classes.appbarwrapper}>
        <Link href="/">
          <h1 className={classes.appTitle}>Vacation+</h1>
        </Link>
        <IconButton>
          <SimpleMenu />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
