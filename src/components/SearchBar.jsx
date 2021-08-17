import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
  },
  searchBar: {
    width: "70%",
  },
});

const SearchBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <TextField
        id="outlined-search"
        label="Search a product"
        type="search"
        variant="outlined"
        className={classes.searchBar}
      />
    </div>
  );
};

export default SearchBar;
