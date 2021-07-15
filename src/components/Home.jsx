import React from "react";
import SearchBar from "./SearchBar";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    margin: 0,
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <SearchBar />;
    </div>
  );
};

export default Home;
