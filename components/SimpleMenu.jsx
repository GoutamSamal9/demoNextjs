import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import SortIcon from "@material-ui/icons/Sort";
import { makeStyles } from "@material-ui/styles";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  icon: {
    color: "#fff",
    fontSize: "2rem",
  },
  menuContainer: {
    width: "668px",
  },
}));

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <SortIcon className={classes.icon} />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className={classes.menuContainer}
      >
        <MenuItem onClick={handleClose}>
          <Link href="/countries">Countries</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
