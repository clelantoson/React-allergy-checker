import React from "react";
import Chip from "@material-ui/core/Chip";
import DoneIcon from "@material-ui/icons/Done";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
  },
  chip: {
    color: theme.palette.text.info,
  },
  styledChips: {
    margin: "0.1rem",
  },
}));

const AllergensSelection = () => {
  const classes = useStyles();
  const allergens = [
    "Milk",
    "Gluten",
    "Soybeans",
    "Peanuts",
    "Nuts",
    "Eggs",
    "Mustard",
    "Molluscs",
    "Celery",
    "Fish",
  ];

  return (
    <div className={classes.root}>
      <h1>Which allergens do you want to avoid ?</h1>
      <h2>Allergens or traces</h2>
      <div className={classes.chip}>
        {allergens.map((allergen, index) => (
          <Chip
            key={index}
            className={classes.styledChips}
            color="primary"
            size="small"
            label={allergen}
            deleteIcon={<DoneIcon />}
            //onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default AllergensSelection;
