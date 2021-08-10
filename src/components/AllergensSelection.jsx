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
        <Chip
          className={classes.styledChips}
          color="primary"
          size="small"
          label="Milk"
          deleteIcon={<DoneIcon />}
          //onDelete={handleDelete}
        />
        <Chip
          className={classes.styledChips}
          color="primary"
          size="small"
          label="Gluten"
          deleteIcon={<DoneIcon />}
          // onDelete={handleDelete}
        />
        <Chip
          className={classes.styledChips}
          color="primary"
          size="small"
          label="Soybeans"
          deleteIcon={<DoneIcon />}
          // onDelete={handleDelete}
        />
        <Chip
          className={classes.styledChips}
          color="primary"
          size="small"
          label="Peanuts"
          deleteIcon={<DoneIcon />}
          // onDelete={handleDelete}
        />
        <Chip
          className={classes.styledChips}
          color="primary"
          size="small"
          label="Nuts"
          deleteIcon={<DoneIcon />}
          // onDelete={handleDelete}
        />
        <Chip
          className={classes.styledChips}
          color="primary"
          size="small"
          label="Eggs"
          deleteIcon={<DoneIcon />}
          // onDelete={handleDelete}
        />
        <Chip
          className={classes.styledChips}
          color="primary"
          size="small"
          label="Mustard"
          deleteIcon={<DoneIcon />}
          // onDelete={handleDelete}
        />
        <Chip
          className={classes.styledChips}
          color="primary"
          size="small"
          label="Molluscs"
          deleteIcon={<DoneIcon />}
          // onDelete={handleDelete}
        />
        <Chip
          className={classes.styledChips}
          color="primary"
          size="small"
          label="Celery"
          deleteIcon={<DoneIcon />}
          // onDelete={handleDelete}
        />
        <Chip
          className={classes.styledChips}
          color="primary"
          size="small"
          label="Fish"
          deleteIcon={<DoneIcon />}
          // onDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default AllergensSelection;
