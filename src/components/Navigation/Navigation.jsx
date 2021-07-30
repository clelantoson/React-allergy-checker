import {
  BottomNavigation,
  BottomNavigationAction,
  makeStyles,
} from "@material-ui/core";
// import Store from '@material-ui/icons/Store';
import Favorite from "@material-ui/icons/Favorite";
import History from "@material-ui/icons/History";
import Profile from "@material-ui/icons/AccountCircle";
import SearchProduct from "@material-ui/icons/Search";
// import BareCode from '@material-ui/icons/CropFree';
import { Link } from "react-router-dom";
import "./Navigation.css";
import React from "react";

const useStyles = makeStyles({
  root: {
    position: "fixed",
    bottom: 0,
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
      className={classes.root}
    >
      {/* <BottomNavigationAction label="Barecode" value="barecode" icon={<BareCode />} /> */}
      <BottomNavigationAction
        component={Link}
        to="/search"
        label="SearchProduct"
        value="search"
        icon={<SearchProduct htmlColor="#3A6EA5" />}
      />
      <BottomNavigationAction
        component={Link}
        to="/favorite"
        label="Favorite"
        value="favorite"
        icon={<Favorite htmlColor="#3A6EA5" />}
      />
      <BottomNavigationAction
        component={Link}
        to="/history"
        label="History"
        value="history"
        icon={<History htmlColor="#3A6EA5" />}
      />
      <BottomNavigationAction
        component={Link}
        to="/profile"
        label="Profile"
        value="profile"
        icon={<Profile htmlColor="#3A6EA5" />}
      />
    </BottomNavigation>
  );
};
// const Navigation = (props) => {
//     return (
//         <nav>
//             <BottomNavigation />
//             <BottomNavigationAction />
//         </nav>
//     );
// }

export default Navigation;
