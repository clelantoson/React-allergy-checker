import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Alert, AlertTitle } from "@material-ui/lab";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const ErrorMessage = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Alert severity="error">
        <AlertTitle>
          <strong>{children}</strong>
        </AlertTitle>
      </Alert>
    </div>
  );
};

ErrorMessage.propTypes = {
  children: PropTypes.string,
};

export default ErrorMessage;
