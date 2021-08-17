import dotenv from "dotenv";
dotenv.config();
import React, { useState, useEffect } from "react";
import {
  Avatar,
  Button,
  TextField,
  // FormControlLabel,
  // Checkbox,
  Link,
  Grid,
  Container,
} from "@material-ui/core";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import Loading from "./Loading";
import ErrorMessage from "../ErrorMessage";
import { GoogleLogin } from "react-google-login";
import axios from "axios";

import { useHistory } from "react-router-dom";

import Icon from "./Icon";

const useStyles = makeStyles((theme) => ({
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
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  MarginTop: {marginTop: theme.spacing(3)},
}));

const Login = () =>{
    const classes = useStyles();
    const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
    


  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");

    if (userInfo) {
      history.push("/");
    }
  }, [history]);

  const handleSubmit = async (event) => {
    event.preventDefault();
     if (email === "" || null || undefined) {
      setError("Email is required");
    }
    if (password === "" || null || undefined) {
      setError("lastName Name is required");
    }
    
    try {
      //   const config = {
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //   };
      setLoading(true);

      const { data } = await axios.post(
        "https://api-food-checker.herokuapp.com/user/login",
        { email, password }
        // config
      );
      // console.log(data);
      localStorage.setItem("userInfo", JSON.stringify(data));
      history.push("/");
      setLoading(false);
    } catch (error) {
      setError(error.response.data.message);
      setLoading(false);
    }
  };

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    //const token = res?.tokenId;

    try {
      console.log(result);
      localStorage.setItem("userInfo", JSON.stringify(result));

      setLoading(false);

      history.push("/");
    } catch (error) {
      console.log(error);
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
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(event) => setEmail(event.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(event) => setPassword(event.target.value)}
          />
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <GoogleLogin
            clientId="1033365412850-3tdvnij779lcrrjbe78d48a1m5fean29.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button
                className={classes.googleButton}
                fullWidth
                variant="outlined"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                startIcon={<Icon />}
              >
                Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleError}
            cookiePolicy="single_host_origin"
          />
          <Grid container>
            {/* <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid> */}
            <Grid item className={classes.MarginTop}>
              <Link href="/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default Login;