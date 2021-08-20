import React, { useState } from "react";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";
// import { Link } from "react-router-dom";
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
  containerButton: {
    // width: "50%",
  },
}));

const AllergensSelection = () => {
  const classes = useStyles();
  const [allergens, setAllergens] = useState(ALLERGENS_TAB);
  const [allergensFromUser, setAllergensFromUser] = useState([]);
  const handleSelectAllergen = (event) => {
    console.log("event", event.target.innerText);
    // the best practice is to use a function for the setter to be sure to have the newest state in parameters
    setAllergens((stateAllergens) => {
      const newAllergens = [...stateAllergens];
      const foundAllergen = newAllergens.find(
        (allergen) => allergen.name === event.target.innerText
      );
      console.log("newAllergens ", newAllergens);
      console.log("foundAllergen", foundAllergen);
      //we change it only if we found it
      if (foundAllergen) foundAllergen.selected = !foundAllergen.selected;
      console.log("newAllergens ", newAllergens);

      setAllergensFromUser(newAllergens);
      return newAllergens;
    });
  };

  const userAllergens = [
    { name: "Milk", selected: false, value: "en:milk" },
    { name: "Gluten", selected: false, value: "en:gluten" },
    { name: "Eggs", selected: false, value: "en:eggs" },
    { name: "Soybeans", selected: true, value: "en:soybeans" },
    { name: "Nuts", selected: false, value: "en:nuts" },
    { name: "Fish", selected: false, value: "en:fish" },
    { name: "Mustard", selected: false, value: "en:mustard" },
    { name: "Celery", selected: false, value: "en:celery" },
    { name: "Sesame seeds", selected: false, value: "en:sesame-seeds" },
    { name: "Peanuts", selected: true, value: "en:peanuts" },
    { name: "Crustaceans", selected: false, value: "en:crustaceans" },
    { name: "Molluscs", selected: false, value: "en:molluscs" },
    { name: "Oats", selected: true, value: "fr:avoine" },
    { name: "Lupin", selected: false, value: "en:lupin" },
  ];

  console.log("allergensFromUser ", allergensFromUser);
  const allergensFromProduct = [
    "en:gluten",
    "fr:avoine",
    "en:soybeans",
    "en:milk",
  ];

  const tracesFromProduct = ["en:gluten", "fr:avoine", "en:nuts", "en:milk"];

  console.log("allergensFromProduct", allergensFromProduct);
  console.log("userAllergens", userAllergens);

  const findAllergens = (allergensInProduct, userAllergens) => {
    userAllergens = userAllergens.filter((allergen) => allergen.selected);
    return allergensInProduct.filter((allergenInProduct) =>
      userAllergens.some(
        (userAllergen) => userAllergen.value === allergenInProduct
      )
    );
  };

  const allergensTags = findAllergens(allergensFromProduct, userAllergens);
  const tracesTags = findAllergens(tracesFromProduct, userAllergens);

  console.log("allergensTags", allergensTags);
  console.log("tracesTags", tracesTags);

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
        <Button variant="contained" color="secondary" href="/">
          Continue
        </Button>
      </div>
    </div>
  );
};

export default AllergensSelection;
