import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Collapse } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 645,
    background: "rgba(0,0,0,0.5)",
    margin: "20px",
    [theme.breakpoints.down("sm")]: {
      flex: "1",
    },
  },
  main: {
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  media: {
    height: 440,
  },
  title: {
    fontFamily: "Nunito",
    fontWeight: "bold",
    fontSize: "2rem",
    color: "#fff",
  },
  description: {
    fontFamily: "Nunito",
    color: "#eee",
    fontSize: "1.3rem",
    fontWeight: "400",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
  },
}));

export default function ImageCard(props) {
  const classes = useStyles();

  return (
    <Collapse in={props.checked} {...(props.checked ? { timeout: 1000 } : {})}>
      <div className={classes.main}>
        <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image="/assets/card2.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              className={classes.title}
            >
              Lizard
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.description}
            >
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image="/assets/card1.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              className={classes.title}
            >
              Lizard
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.description}
            >
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </Card>
      </div>
    </Collapse>
  );
}
