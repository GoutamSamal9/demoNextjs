import { CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useEffect, useState } from "react";
import Countries from "../../components/Countries";
import NavBar from "../../components/NavBar";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  // root: {
  //   minHeight: "100vh",
  // },
}));

export default function Index() {
  const classes = useStyles();
  const [country, setCountry] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("https://restcountries.eu/rest/v2/all");
      setCountry(data);
    };
    fetchData();
    return () => {};
  }, []);

  const handelDelete = (countr) => {
    console.log(countr);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <Countries
        countries={country}
        className={classes.countriesContainer}
        clickDelet={() => handelDelete()}
      />
    </div>
  );
}
