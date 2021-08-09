import React from "react";
import Chip from "@material-ui/core/Chip";
import DoneIcon from "@material-ui/icons/Done";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    // position: "fixed",
    // bottom: 0,
    // width: "100%",
    textAlign: "center",
  },
  chip: {
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const AllergensSelection = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <h1>Which allergens do you want to avoid ?</h1>
        <h2>Allergens or traces</h2>
        <div className={classes.chip}>
          <Chip
            color="secondary"
            size="small"
            label="Milk"
            deleteIcon={<DoneIcon />}
            // onDelete={handleDelete}
          />
          <Chip
            color="secondary"
            size="small"
            label="Gluten"
            deleteIcon={<DoneIcon />}
            // onDelete={handleDelete}
          />
          <Chip
            color="secondary"
            size="small"
            label="Soybeans"
            deleteIcon={<DoneIcon />}
            // onDelete={handleDelete}
          />
          <Chip
            color="secondary"
            size="small"
            label="Peanuts"
            deleteIcon={<DoneIcon />}
            // onDelete={handleDelete}
          />
          <Chip
            color="secondary"
            size="small"
            label="Nuts"
            deleteIcon={<DoneIcon />}
            // onDelete={handleDelete}
          />
          <Chip
            color="secondary"
            size="small"
            label="Eggs"
            deleteIcon={<DoneIcon />}
            // onDelete={handleDelete}
          />
          <Chip
            color="secondary"
            size="small"
            label="Mustard"
            deleteIcon={<DoneIcon />}
            // onDelete={handleDelete}
          />
          <Chip
            color="secondary"
            size="small"
            label="Molluscs"
            deleteIcon={<DoneIcon />}
            // onDelete={handleDelete}
          />
          <Chip
            color="secondary"
            size="small"
            label="Celery"
            deleteIcon={<DoneIcon />}
            // onDelete={handleDelete}
          />
          <Chip
            color="secondary"
            size="small"
            label="Fish"
            deleteIcon={<DoneIcon />}
            // onDelete={handleDelete}
          />
        </div>
      </div>
    </>
  );
};

export default AllergensSelection;
