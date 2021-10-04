import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./AllergensSelection.css";
import AllergensChips from "./AllergensChips";

const useStyles = makeStyles(() => ({
  containerAllergens: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
  },
  selectedChip: {
    margin: "0.3rem",
  },
  notSelectedChip: {
    margin: "0.3rem",
    opacity: "0.3",
  },
}));

const AllergensSelection = () => {
  const classes = useStyles();

  return (
    <div className={classes.containerAllergens}>
      <h1>Which allergens do you want to avoid ?</h1>
      <p>Allergens or traces</p>
      <AllergensChips />
    </div>
  );
};

export default AllergensSelection;
