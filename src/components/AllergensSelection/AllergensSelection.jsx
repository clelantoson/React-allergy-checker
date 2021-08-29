import React, { useState} from "react";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";
// import { Link } from "react-router-dom";
import "./AllergensSelection.css";
import { Button, IconButton } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import { ALLERGENS_TAB } from "../../../src/constants";

import Alert from "@material-ui/lab/Alert";
import { useDispatch, useSelector } from "react-redux";
import {
  addAllergenAction,
  updateAllergenAction,
} from "../../actions/allergensActions";
import Loading from "../Auth/Loading";
import ErrorMessage from "../ErrorMessage";
import { useHistory } from "react-router-dom";


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

// const  =
//   JSON.parse(localStorage.getItem("user_allergens")) || [];


const AllergensSelection = () => {
  const history = useHistory();
  const [showEdit, setShowEdit] = useState(false);
  const dispatch = useDispatch();
  
  const userAllergen = useSelector((state) => state.userAllergens);
  const { allergy } = userAllergen;

 const userAllergenUpdate = useSelector((state) => state.userAllergens);
 const { loading, error, success } = userAllergenUpdate;

  
   const userAllergensLoaded = userAllergen?.allergy || [];
  
   const reloadAllergens = () => {
     const allergens = [...ALLERGENS_TAB];
     allergens.forEach((allergen) => {
       allergen.selected = userAllergensLoaded.some(
         (userAllergen) => userAllergen.value === allergen.value
       );
     });
     return allergens;
   };
  

  const classes = useStyles();
  const [allergens, setAllergens] = useState(reloadAllergens);
  const [allergensFromUser, setAllergensFromUser] = useState(userAllergensLoaded);

  const [allergies, setAllergies] = useState(allergy);
  
  const handleSelectAllergen = (event) => {
    // console.log("event", event.target.innerText);
    // the best practice is to use a function for the setter to be sure to have the newest state in parameters
    setAllergens((stateAllergens) => {
      const newAllergens = [...stateAllergens];
      const foundAllergen = newAllergens.find(
        (allergen) => allergen.name === event.target.innerText
      );
      // console.log("newAllergens ", newAllergens);
      // console.log("foundAllergen", foundAllergen);
      //we change it only if we found it
      if (foundAllergen) foundAllergen.selected = !foundAllergen.selected;
      // console.log("newAllergens ", newAllergens);

      setAllergensFromUser(
        newAllergens.filter((allergen) => allergen.selected)
      );
      return newAllergens;
    });
  };


  const saveAllergens = () => {
    setAllergies(allergensFromUser);
    const allergy = {
      allergy: allergies,
    };

    console.log("project",allergy);

    console.log("id", userAllergen?._id);
    const id = userAllergen?._id;
    // JSON.stringify(id);
   
    // localStorage.setItem("user_allergens", JSON.stringify(allergensFromUser));
    userAllergen?.allergy
      ? dispatch(updateAllergenAction(id, {allergy: allergies }))
      : dispatch(addAllergenAction(allergy));
    
    setShowEdit(false);
    history.push("/profile");
    
  };

  
  console.log(success);
  console.log("allergen", allergies);
  return (
    <div className={classes.containerAllergens}>
      <h1>Which allergens do you want to avoid ?</h1>
      <p>Allergens or traces</p>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {loading && <Loading />}
      {success && <Alert severity="success">Upadated Successfully</Alert>}

      <div className={classes.chip}>
        {!showEdit && (
          <IconButton
            className={classes.button}
            aria-label="Delete"
            onClick={() => setShowEdit(!showEdit)}
          >
            <EditIcon />
          </IconButton>
        )}
        {!userAllergen ||
          (showEdit &&
            allergens.map((allergen, index) => (
              <Chip
                key={index}
                className={
                  allergen.selected
                    ? classes.selectedChip
                    : classes.notSelectedChip
                }
                color="primary"
                size="medium"
                label={allergen.name}
                onClick={handleSelectAllergen}
              />
            )))}
        {userAllergen &&
          !showEdit &&
          allergies.map((allergen, index) => (
            <Chip
              key={index}
              className={classes.selectedChip}
              color="primary"
              size="medium"
              label={allergen.name}
              onClick={handleSelectAllergen}
            />
          ))}
      </div>
      {showEdit && (
        <div className={classes.containerButton}>
          <Button onClick={saveAllergens} variant="contained" color="secondary">
            Continue
          </Button>
        </div>
      )}
    </div>
  );
};

export default AllergensSelection;
