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
  
  media: {
    height: 140,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


const Personalinfo = ({ userInfo }) => {
   const classes = useStyles();
  const dispatch = useDispatch();

  const [showEdit, setShowEdit] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const [pic, setPic] = useState(
    "https://images.unsplash.com/photo-1626193759855-4f03fc744287?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  );
  // const [message, setMessage] = useState(null);
  const [picMessage, setPicMessage] = useState();

  const userUpdate = useSelector((state) => state.userUpdate);
  const { loading, error, success } = userUpdate;

  useEffect(() => {
    if (userInfo) {
      setName(userInfo?.name);
      setEmail(userInfo?.email);
      setPic(userInfo?.pic);
    }
  }, [userInfo]);

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
          setPic(data.url);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setPicMessage("Invalid image");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(updateProfile({ name, email, password, pic }));
    setShowEdit(false);
  };


  return (
    <div>
      <IconButton
        className={classes.button}
        aria-label="Delete"
        onClick={() => setShowEdit(!showEdit)}
        style={ showEdit == true ? {display: "none"} : {display: "block"} }
      >
        <EditIcon />
      </IconButton>

      {!showEdit && (
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              @{userInfo?.name.split(" ")[0]}
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}> Email : {userInfo?.email}</Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>Password : .........</Paper>
          </Grid>
        </Grid>
      )}

      {loading && <Loading />}
      {/* {message && <ErrorMessage>{message}</ErrorMessage>} */}
      {error && <ErrorMessage>{error}</ErrorMessage>}

      {success && <Alert severity="success">Upadated Successfully</Alert>}
      {showEdit && (
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="name"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="name"
                autoFocus
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            {/* <Grid item xs={12} sm={6}>
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
          </Grid> */}
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
              <img
                src={userInfo?.pic}
                alt={userInfo?.name}
                className="profilePic"
              />
              <FilledInput
                name="upload-photo"
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