import React, { useEffect} from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


import ProfileUser from "./profile/userProfile";
import Allergens from "../components/AllergensSelection/AllergensSelection";
// import ProfileFavorites from "./profile/ProfileFavorites";
import Personalinfo from "./profile/Personalinfo";

import { makeStyles,Button, Link, Grid } from "@material-ui/core";


import { logoutActions } from "../actions/userActions";

const useStyles = makeStyles(() => ({
  containerProfile: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
  }
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
    <div className={classes.containerProfile}>
      <ProfileUser userInfo={userInfo} history={history} />
     
      <Personalinfo userInfo={userInfo} history={history} />
      <Allergens userInfo={userInfo} history={history} />
      <h2>Favorites</h2>
      {/* <ProfileFavorites userInfo={userInfo} history={history} /> */}

      <Grid container>
        {!userInfo && (
          <Grid item xs>
            <Link href="/login" variant="body2">
              login
            </Link>
          </Grid>
        )}

        {!userInfo && (
          <Grid item>
            <Link href="/register" variant="body2">
              register
            </Link>
          </Grid>
        )}

        {userInfo && (
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={logoutHandler}
          >
            Logout
          </Button>
        )}
      </Grid>
    </div>
  );
};

export default Profile;
