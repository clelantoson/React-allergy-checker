import React from "react";
import SearchBar from "./SearchBar";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    margin: 0,
    height: "100%",
    width: "100%",
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <SearchBar />;
      <SearchBar />;
      <SearchBar />;
    </div>
  );
};

export default Home;
