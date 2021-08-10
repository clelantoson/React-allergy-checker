import React, { useState } from "react";
import Chip from "@material-ui/core/Chip";
import DoneIcon from "@material-ui/icons/Done";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    textAlign: "center",
  },
  //   chip: {
  //     color: theme.palette.text.info,
  //   },
  selectedChip: {
    margin: "0.1rem",
  },
  notSelectedChip: {
    margin: "0.1rem",
    opacity: "0.3",
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
    const newAllergens = [...allergens];
    const foundAllergen = newAllergens.find(
      (allergen) => allergen.name === event.target.innerText
    );
    foundAllergen.selected = !foundAllergen.selected;
    setAllergens(newAllergens);
  };

  return (
    <div className={classes.root}>
      <h1>Which allergens do you want to avoid ?</h1>
      <h2>Allergens or traces</h2>
      <div className={classes.chip}>
        {allergens.map((allergen, index) => (
          <Chip
            key={index}
            className={
              allergen.selected ? classes.selectedChip : classes.notSelectedChip
            }
            color="primary"
            size="small"
            label={allergen.name}
            deleteIcon={<DoneIcon />}
            onClick={handleSelectAllergen}
            //onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default AllergensSelection;
