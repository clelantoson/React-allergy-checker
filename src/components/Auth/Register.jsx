import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

// import { IconButton, Tooltip } from "@material-ui/core";
// import { PhotoCamera } from "@material-ui/icons";

import ErrorMessage from "../ErrorMessage";
import Loading from "../Auth/Loading";
import axios from "axios";

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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  input: {
    display: "none",
  },
  faceImage: {
    color: theme.palette.primary.light,
  },
}));

export default function Register() {
  const classes = useStyles();
  //   const history = useHistory();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordConfirm, setPasswordConfirm] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  // const [pic, setPic] = React.useState();
  const [message, setMessage] = useState(null);
  // const [picMessage, setPicMessage] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);


  const handleSubmit = async (event) => {
    event.preventDefault();
     
    let emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let PasswordRegex =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;

    if (firstName === "" || null || undefined) {
      setMessage("First Name is required");
    } else if (lastName === "" || null || undefined) {
      setMessage("lastName Name is required");
    } else if (email === "" || null || undefined) {
      setMessage("Email is required");
    } else if (!email.match(emailRegex)) {
      setMessage("You have entered an invalid email address!");
    } else if (password === "" || null || undefined) {
      setMessage("Password is required");
    } else if (passwordConfirm === "" || null || undefined) {
      setMessage("password Confirm is required");
    }
    else if (password.match(PasswordRegex)) {
      setMessage(
        "Input Password and Submit [7 to 15 characters which contain only characters, numeric digits, underscore and first character must be a letter"
      );
    } else if (password !== passwordConfirm) {
      setMessage("Password and Password Confirm does not match");
    } else {
      setMessage(null);
      try {
        // const config = { headers: { "Content-Type": "application/json" } };

        setLoading(true);

        const { data } = await axios.post(
          "https://api-food-checker.herokuapp.com/user/register",
          { firstName, lastName, email, password /*picµ*/ }
          //   config
        );
        setLoading(false);
        localStorage.setItem("userInfo", JSON.stringify(data));

        history.push("/");

        // console.log(picMessage, setPicMessage("Successfully registered"));
      } catch (err) {
        setError(err.response.data.message);
         setLoading(false);
      }
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>

        {message && <ErrorMessage>{message}</ErrorMessage>}
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {loading && <Loading />}

        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="passwordConfirm"
                label="passwordConfirm"
                type="password"
                id="passwordConfirm"
                autoComplete="current-password"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
              />
            </Grid>
            {/* <Grid item xs={12}>
              <input
                accept="image/jpeg"
                className={classes.input}
                id="faceImage"
                type="file"
                onChange={(e) => setPic(e.target.files[0])}
              />
              <Tooltip title="Select Image">
                <label htmlFor="faceImage">
                  <IconButton
                    className={classes.faceImage}
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                  >
                    <PhotoCamera fontSize="large" />
                  </IconButton>
                </label>
              </Tooltip>
              <label>{pic ? pic.name : "Select Image"}</label>. . .
            </Grid> */}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
         
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>

      </div>
    </Container>
  );
}
