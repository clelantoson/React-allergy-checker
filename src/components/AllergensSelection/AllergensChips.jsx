import React, { useState } from "react";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";
import "./AllergensSelection.css";
import Button from "@material-ui/core/Button";
import { ALLERGENS_TAB } from "../../../src/constants";

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
  buttonMui: {
    marginTop: "3rem",
    borderRadius: "16px",
  },
}));

const userAllergensLoaded =
  JSON.parse(localStorage.getItem("user_allergens")) || [];

const reloadAllergens = () => {
  const allergens = [...ALLERGENS_TAB];
  allergens.forEach((allergen) => {
    allergen.selected = userAllergensLoaded.some(
      (userAllergen) => userAllergen.value === allergen.value
    );
  });
  return allergens;
};

const AllergensChips = () => {
  const classes = useStyles();
  const [allergens, setAllergens] = useState(reloadAllergens);
  const [allergensFromUser, setAllergensFromUser] =
    useState(userAllergensLoaded);
  const handleSelectAllergen = (event) => {
    // the best practice is to use a function for the setter to be sure to have the newest state in parameters ex: if we click too quickly
    setAllergens((stateAllergens) => {
      const newAllergens = [...stateAllergens];
      const foundAllergen = newAllergens.find(
        (allergen) => allergen.name === event.target.innerText
      );
      //we change it only if we found it
      if (foundAllergen) foundAllergen.selected = !foundAllergen.selected;
      setAllergensFromUser(
        newAllergens.filter((allergen) => allergen.selected)
      );
      return newAllergens;
    });
  };

  const saveAllergens = () => {
    localStorage.setItem("user_allergens", JSON.stringify(allergensFromUser));
  };

  return (
    <>
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
      <div>
        <Button
          className={classes.buttonMui}
          onClick={saveAllergens}
          variant="contained"
          color="secondary"
          href="/"
        >
          Continue
        </Button>
      </div>
    </>
  );
};

export default AllergensChips;
