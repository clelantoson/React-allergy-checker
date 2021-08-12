import React, { useState } from "react";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";
//import { Link } from "react-router-dom";
import "./AllergensSelection.css";
import Button from "@material-ui/core/Button";

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
  containerButton: {
    // width: "50%",
  },
}));

const AllergensSelection = () => {
  const classes = useStyles();
  const [allergens, setAllergens] = useState([
    { name: "Milk", selected: false },
    { name: "Gluten", selected: false },
    { name: "Soybeans", selected: false },
    { name: "Peanuts", selected: false },
    { name: "Nuts", selected: false },
    { name: "Eggs", selected: false },
    { name: "Mustard", selected: false },
    { name: "Molluscs", selected: false },
    { name: "Celery", selected: false },
    { name: "Fish", selected: false },
  ]);

  //   // eslint-disable-next-line no-debugger
  //   debugger;

  const handleSelectAllergen = (event) => {
    console.log("event", event.target.innerText);
    // the best practice is to use a function for the setter to be sure to have the newest state in parameters
    setAllergens((stateAllergens) => {
      const newAllergens = [...stateAllergens];
      const foundAllergen = newAllergens.find(
        (allergen) => allergen.name === event.target.innerText
      );
      //we change it only if we found it
      if (foundAllergen) foundAllergen.selected = !foundAllergen.selected;
      return newAllergens;
    });
  };

  return (
    <div className={classes.containerAllergens}>
      <h1>Which allergens do you want to avoid ?</h1>
      <p>Allergens or traces</p>
      <div className={classes.chip}>
        {allergens.map((allergen, index) => (
          <Chip
            key={index}
            className={
              allergen.selected ? classes.selectedChip : classes.notSelectedChip
            }
            color="primary"
            size="medium"
            label={allergen.name}
            onClick={handleSelectAllergen}
          />
        ))}
      </div>
      <div className={classes.containerButton}>
        <Button variant="contained" color="secondary" href="#contained-buttons">
          Continue
        </Button>
      </div>
    </div>
  );
};

export default AllergensSelection;
