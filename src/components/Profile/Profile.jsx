import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProfileUser from "./userProfile";
import Personalinfo from "./Personalinfo";
import {
  makeStyles,
  Button,
  Link,
  Grid,
  Typography,
  Box,
} from "@material-ui/core";
import { logoutActions } from "../../actions/userActions";
import AllergensChips from "../AllergensSelection/AllergensChips";

const useStyles = makeStyles(() => ({
  containerProfile: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    overflowY: "auto",
  },
}));

const Profile = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    }
  }, [history, userInfo]);

  const logoutHandler = () => {
    dispatch(logoutActions());
    history.push("/login");
  };

  useEffect(() => {}, [userInfo]);

  return (
    <Box className={classes.containerProfile}>
      <ProfileUser userInfo={userInfo} history={history} />
      <Personalinfo userInfo={userInfo} history={history} />
      <Typography variant="h4" color="secondary" component="h2" gutterBottom>
        Your allergens
      </Typography>
      <AllergensChips userInfo={userInfo} history={history} />

      <Grid>
        {!userInfo && (
          <Grid item xs>
            <Link href="/login" variant="body2">
              Login
            </Link>
          </Grid>
        )}

        {!userInfo && (
          <Grid item>
            <Link href="/register" variant="body2">
              Register
            </Link>
          </Grid>
        )}

        {userInfo && (
          <Button variant="contained" color="primary" onClick={logoutHandler}>
            Logout
          </Button>
        )}
      </Grid>
    </Box>
  );
};

export default Profile;
