import React from "react";
import { useHistory } from "react-router-dom";

import "./profile.scss";
import ProfileUser from "./profile/ProfileUser";
import Allergens from "./profile/Allergens";
import ProfileFavorites from "./profile/ProfileFavorites";
import Personalinfo from "./profile/Personalinfo";

import { Button,Link, Grid } from "@material-ui/core";

const Profile = () => {
  const history = useHistory();
  const userInfo = localStorage.getItem("userInfo");
  return (
    <div>
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
            onClick={ () => {localStorage.removeItem("userInfo"); history.push("/");}}
          >
            Logout
          </Button>
        )}
      </Grid>

      <ProfileUser />
      <h2>Allergens</h2>
      <Allergens />
      <h2>Favorites</h2>
      <ProfileFavorites />
      <h2>personal information</h2>
      <Personalinfo />
    </div>
  );
};

export default Profile;
