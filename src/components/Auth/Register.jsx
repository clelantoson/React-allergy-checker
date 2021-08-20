import React, { useState,useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  Container,
  Grid,
  Button,
  TextField,
  Link,
  Avatar,
} from "@material-ui/core";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";


import ErrorMessage from "../ErrorMessage";
import Loading from "./Loading";
import {registerActions} from "../../actions/userActions"; 




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

const Register = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [pic, setPic] = useState(
    "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
  );
  const [message, setMessage] = useState(null);
  const [picMessage, setPicMessage] = useState(null);

  const userRegister = useSelector(state => state.userRegister)
  const { loading, error, userInfo } = userRegister 

  useEffect(() => {
     if (!userInfo) {
      history.push("/login") || history.push("/register");
    } 
    if (userInfo) {
      history.push("/profile");
    }
  }, [history,userInfo])
      

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
    } else if (password.match(PasswordRegex)) {
      setMessage(
        "Input Password and Submit [7 to 15 characters which contain only characters, numeric digits, underscore and first character must be a letter"
      );
    } else if (password !== passwordConfirm) {
      setMessage("Password and Password Confirm does not match");
    } else {
      dispatch(registerActions(firstName, lastName, email, password, pic));
     }
      
  }

  const postDetails = (pics) => {
    if (!pics) {
      return setPicMessage("No image selected");
    }
    setPicMessage(null);
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "foodchecker");
      data.append("cloud_name", "dkatjs6ab");
      fetch("https://api.cloudinary.com/v1_1/dkatjs6ab/image/upload", {
        method: "post",
        body:data
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          setPic(data.url);
          
        })
        .catch((err) => {
          console.log(err);
        });
    }
    else {
      setPicMessage("Invalid image");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
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
            {picMessage && <ErrorMessage>{picMessage}</ErrorMessage>}
            <Grid item xs={12}>
              <TextField
                name="upload-photo"
                type="file"
                onChange={(e) => postDetails(e.target.files[0])}
                label="Upload Profile Picture"
              />
            </Grid>
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
};

export default Register;
