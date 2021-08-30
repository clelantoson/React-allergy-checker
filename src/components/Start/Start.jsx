import React from "react";
import { Button, Box, Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ScannerIcon from "@material-ui/icons/CropFreeRounded";
import SearchIcon from "@material-ui/icons/Search";
import KeyIcon from "@material-ui/icons/VpnKeyRounded";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: "100%",
    overflowY: "auto",
    display: "flex",
    justifyContent: "center",
  },
  containerStart: {
    justifyContent: "space-evenly",
    display: "flex",
    flexDirection: "column",
    width: "80%",
    alignItems: "center",
    textAlign: "center",
  },
  paper: {
    padding: "1rem",
  },
}));

const Start = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box className={classes.containerStart}>
        <Paper className={classes.paper}>
          <ScannerIcon color="primary" fontSize="large" />
          <Typography>
            Scan a product and check quickly if it contains your allergens
          </Typography>
          <Button variant="contained" color="secondary" href="/scan">
            Scan a product
          </Button>
        </Paper>
        <Paper className={classes.paper}>
          <SearchIcon color="primary" fontSize="large" />
          <Typography>
            Search a product in our database to know quickly if it contains your
            allergens
          </Typography>
          <Button variant="contained" color="secondary" href="/search">
            Search a product
          </Button>
        </Paper>
        <Paper className={classes.paper}>
          <KeyIcon color="primary" fontSize="large" />
          <Typography>
            Stay connected and enjoy every features of the app
          </Typography>
          <Button variant="contained" color="primary" href="/login">
            Log in / Sign in
          </Button>
        </Paper>
      </Box>
    </div>
  );
};

export default Start;
