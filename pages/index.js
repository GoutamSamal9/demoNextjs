import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import Header from "../components/Header";
import { withRouter } from "next/router";
import PlaceToVisit from "../components/PlaceToVisit";

import dynamic from "next/dynamic";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    background: `url(${"/assets/back.jpg"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));
function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <PlaceToVisit />
    </div>
  );
}

const HomePage = dynamic(() => Promise.resolve(withRouter(Home)), {
  ssr: false,
});

export default HomePage;
