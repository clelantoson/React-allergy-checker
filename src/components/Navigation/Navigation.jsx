import {
  BottomNavigation,
  BottomNavigationAction,
  makeStyles,
} from "@material-ui/core";
import Favorite from "@material-ui/icons/Favorite";
import History from "@material-ui/icons/History";
import Profile from "@material-ui/icons/AccountCircle";
import SearchProduct from "@material-ui/icons/Search";
import Scanner from "@material-ui/icons/CropFreeRounded";
import { Link } from "react-router-dom";
import "./Navigation.css";
import React from "react";

const useStyles = makeStyles({
  containerNav: {
    width: "100%",
  },
});

const Navigation = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState("user");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={classes.containerNav}
    >
      <BottomNavigationAction
        component={Link}
        to="/search"
        label="Search"
        value="search"
        icon={<SearchProduct />}
      />
      <BottomNavigationAction
        component={Link}
        to="/favorite"
        label="Favorite"
        value="favorite"
        icon={<Favorite />}
      />
      <BottomNavigationAction
        component={Link}
        to="/scan"
        label="Scan"
        value="scan"
        icon={<Scanner />}
      />
      <BottomNavigationAction
        component={Link}
        to="/history"
        label="History"
        value="history"
        icon={<History />}
      />
      <BottomNavigationAction
        component={Link}
        to="/profile"
        label="Profile"
        value="profile"
        icon={<Profile />}
      />
    </BottomNavigation>
  );
};

export default Navigation;
