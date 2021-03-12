import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import {
  Avatar,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  IconButton,
  Typography,
} from "@material-ui/core";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    marginTop: "100px",
  },
  square: {
    backgroundColor: "white",
  },
  main: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
}));

export default function Countries(props) {
  const classes = useStyles();
  const countriesProps = props.countries;
  // const [countries, setCountries] = useState({ countriesProps });

  // const handelDelet = (country) => {
  //   console.log(country);
  //   // const countri = countries.filter((m) => m.name !== country.name);
  //   // console.log(countri);
  //   // setCountries({ countri });
  // };

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {countriesProps.map((country, index) => (
            <Grid item xl={6} xl={3} key={index}>
              <Card className={classes.main}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={country.flag}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {country.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="secondary">
                    <FavoriteBorderIcon />
                  </Button>
                  <Button
                    size="small"
                    color="secondary"
                    onClick={props.clickDelet}
                  >
                    <DeleteOutlineIcon className={classes.deleteIcon} />
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
