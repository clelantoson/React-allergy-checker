import dotenv from "dotenv";
dotenv.config();
import React, { useState, useEffect } from "react";
import {
  Avatar,
  Button,
  Grid,
  Container,
} from "@material-ui/core";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import Loading from "./Loading";
import ErrorMessage from "../ErrorMessage";
import { GoogleLogin } from "react-google-login";


import { useHistory } from "react-router-dom";

import Icon from "./Icon";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  google: {
    margin: theme.spacing(13, 10, 12,  ),
  },
}));

export default function Login() {
  const classes = useStyles();
  const history = useHistory();

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");

    if (userInfo) {
      history.push("/");
    }
  }, [history]);

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    //const token = res?.tokenId;

    try {
      console.log(result);
      localStorage.setItem("userInfo", JSON.stringify(result));

      setLoading(false);

      history.push("/");
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  const googleError = () =>
    alert("Google Sign In was unsuccessful. Try again later");

  return (
    <Container component="main" maxWidth="xs">
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {loading && <Loading />}
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h4">
          Food Checker
        </Typography>

        <GoogleLogin
          clientId="1033365412850-3tdvnij779lcrrjbe78d48a1m5fean29.apps.googleusercontent.com"
          render={(renderProps) => (
            <Button
              className={classes.submit}
              color="primary"
              fullWidth
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
              startIcon={<Icon />}
              variant="outlined"
            >
              Google in with Google
            </Button>
          )}
          onSuccess={googleSuccess}
          onFailure={googleError}
          cookiePolicy="single_host_origin"
        />
        <Grid container spacing={1} className={classes.root}>
          <Grid item xs={12} md={6} spacing={3}>
            <Button variant="contained" color="primary">
              Login
            </Button>
          </Grid>
          <Grid item xs={12} md={6} spacing={3}>
            <Button variant="contained" color="secondary">
              Login
            </Button>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
