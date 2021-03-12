import { makeStyle } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/styles";
import useWindowPosition from "../hooks/useWindowPosition";
import ImageCard from "./ImageCard";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
}));

export default function PlaceToVisit() {
  const classes = useStyles();

  const checked = useWindowPosition("header");
  return (
    <div className={classes.root} id="place-to-visit">
      <ImageCard checked={checked} />
    </div>
  );
}
