import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import "./personalinfo.scss"
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import {
  Paper,
  Grid,
  Button,
  TextField,
  FilledInput,
  IconButton,
  Typography,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";

import ErrorMessage from "../ErrorMessage";
import Loading from "../Auth/Loading";
import { updateProfile } from "../../actions/userActions";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  title: {
    textTransform: "capitalize",
  },
  media: {
    height: 140,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  color: {
    color: theme.palette.secondary.main,
    fontWeight: "bold",
  },
  grid: {
    display: "flex",
    justifyContent: "center",
  },
  personalInfoContainer: {
    marginBottom: "2rem",
  },
}));

const Personalinfo = ({ userInfo }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const userUpdate = useSelector((state) => state.userUpdate);
  const { loading, error, success } = userUpdate;
  const [showEdit, setShowEdit] = useState(false);

  const initialState = {
    firstName: userInfo?.name.split(" ")[0],
    lastName: userInfo?.name.split(" ")[1],
    email: userInfo?.email,
    password: "",
    confirmPassword: "",
    pic: userInfo?.pic,
  };

  const [form, setForm] = useState();
  // const [message, setMessage] = useState(null);
  const [picMessage, setPicMessage] = useState();

  useEffect(() => {
    if (userInfo) {
      setForm(initialState);
    }
  }, [userInfo]);

  console.log("google", userInfo?.googleId);

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
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          setForm({ ...form, pic: data.url.toString() });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setPicMessage("Invalid image");
    }
  };

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(updateProfile(form));
    console.log("sub", form);
    setShowEdit(false);
  };

  // console.log(form);

  return (
    <div className={classes.personalInfoContainer}>
      <Typography
        gutterBottom
        variant="h4"
        component="h2"
        // className={classes.color}
        color="secondary"
      >
        Personal information
      </Typography>

      {!userInfo?.googleId && (
        <IconButton
          className={classes.button}
          aria-label="Delete"
          onClick={() => setShowEdit(!showEdit)}
        >
          <EditIcon />
        </IconButton>
      )}
      {!showEdit && (
        <Grid className={classes.grid} container spacing={1}>
          <Grid item xs={10} sm={6}>
            <Paper className={`${classes.paper} ${classes.title}`}>
              {userInfo?.name}
            </Paper>
          </Grid>
          <Grid item xs={10} sm={6}>
            <Paper className={classes.paper}> Email : {userInfo?.email}</Paper>
          </Grid>
          <Grid item xs={10} sm={6}>
            <Paper className={classes.paper}>Password : *****</Paper>
          </Grid>
        </Grid>
      )}
      {loading && <Loading />}
      {/* {message && <ErrorMessage>{message}</ErrorMessage>} */}
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {success && <Alert severity="success">Upadated Successfully</Alert>}
      {}
      {!userInfo?.googleId && showEdit && (
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
                value={form.firstName}
                onChange={handleChange}
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
                value={form.lastName}
                onChange={handleChange}
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
                value={form.email}
                onChange={handleChange}
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
                value={form.password}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="confirmPassword"
                label="confirmPassword"
                type="password"
                id="confirmPassword"
                autoComplete="current-password"
                value={form.confirmPassword}
                onChange={handleChange}
              />
            </Grid>
            {picMessage && <ErrorMessage>{picMessage}</ErrorMessage>}
            <Grid item xs={12}>
              <img
                src={userInfo?.pic}
                alt={userInfo?.name}
                className="profilePic"
              />
              <FilledInput
                name="pic"
                type="file"
                onChange={(e) => postDetails(e.target.files[0])}
                label="Upload Profile Picture"
                fullWidth
                placeholder="Upload Profile Picture"
                disableUnderline
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
            Update
          </Button>
        </form>
      )}
    </div>
  );
};

export default Personalinfo;
