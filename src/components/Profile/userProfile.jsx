import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import {
  Avatar,
  // Card,
  Grid,
  Typography,
} from "@material-ui/core";

// import img from "../../img/profile-bg.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(2),
  },
  title: {
    textTransform: "capitalize",
  },
  width: {
    maxWidth: "100%",
    margin: "2rem auto",
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const UserProfile = ({ userInfo }) => {
  const classes = useStyles();

  // console.log(userInfo?.imageUrl);
  return (
    <div className={classes.width}>
      <Grid
        spacing={2}
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <Avatar
            className={classes.large}
            alt={userInfo?.name}
            src={
              userInfo?.pic || userInfo?.imageUrl
                ? userInfo?.pic || userInfo?.imageUrl
                : "https://images.unsplash.com/photo-1626193759855-4f03fc744287?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            }
          />
        </Grid>
        <Grid item>
          <Typography
            gutterBottom
            variant="h4"
            component="h1"
            className={classes.title}
          >
            {userInfo?.name.split(" ")[0]} {userInfo?.name.split(" ")[1]}
          </Typography>
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
          >
            <Grid item>
              <Typography
                variant="subtitle1"
                color="textSecondary"
                component="h5"
              >
                Allergens : 5
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="subtitle2"
                color="textSecondary"
                component="h5"
              >
                Favorites : 15
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default UserProfile;
