import { AppBar, Collapse, IconButton, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useEffect, useState } from "react";
import SimpleMenu from "./SimpleMenu";
import Link from "next/link";
import NavBar from "./NavBar";
import { Link as Scroll } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  appbarwrapper: {
    width: "80%",
    margin: "0 auto",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  colorText: {
    color: "#fff",
  },
  heroText: {
    color: "#eee",
    fontSize: "4.1rem",
    fontFamily: "Nunito",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.5rem",
    },
  },
  container: {
    textAlign: "center",
  },
  arrow: {
    color: "#eee",
    fontSize: "4rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.5rem",
      position: "relative",
      bottom: "-100px",
    },
  },
}));

export default function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <div className={classes.root} id="header">
      <NavBar />
      <Collapse
        in={checked}
        {...(checked ? { timeout: 1500 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.container}>
          <h1 className={classes.heroText}>
            Be Serious for <br /> Your
            <span className={classes.colorText}> Vacation.</span>
          </h1>
          <Scroll to="place-to-visit" smooth={true}>
            <IconButton>
              <ExpandMoreIcon className={classes.arrow} />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </div>
  );
}
