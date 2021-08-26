import { Avatar, Grid, List, ListItem, Typography } from "@material-ui/core";
import {
  // Avatar,
  // ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  // Grid,
} from "@material-ui/core";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import WarningRoundedIcon from "@material-ui/icons/WarningRounded";

import Paper from "@material-ui/core/Paper";
import React from "react";

const useStyles = makeStyles(() => ({
  list: {},
  fullWidth: { width: "100%" },
  centerItem: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  circleIcon: {
    marginRight: "4px",
  },
  listItemAvatar: {
    display: "flex",
    justifyContent: "center",
  },
  listItem: {
    padding: "0 1rem 0 1rem",
    borderRadius: "20px",
    marginBottom: "4px",
  },
  paper: {
    width: "100%",
  },
  warningRoundedIcon: {
    color: "orange",
    marginRight: "0.5rem",
  },
  checkIcon: {
    color: "green",
    marginRight: "0.5rem",
  },
}));

const Favorite = () => {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem
        className={classes.listItem}
        // key={product.id}
        alignItems="center"
      >
        {/* {error && <ErrorMessage>{error}</ErrorMessage>}
      {loading && <Loading />} */}
        <Paper className={classes.paper} elevation={1}>
          <Grid wrap="nowrap" container>
            <Grid item lg={2} className={classes.centerItem}>
              <ListItemAvatar
                className={classes.listItemAvatar}>
                <Avatar src="#"/>
              </ListItemAvatar>
            </Grid>
            <Grid item lg={8} className={classes.fullWidth}>
              <ListItemText
                primary="test"
                secondary="test2"
              // secondary={product.id}
              />
              <WarningRoundedIcon className={classes.warningRoundedIcon} />
              <Typography> You are allergic</Typography>


            </Grid>
            
            <Grid item lg={2} className={classes.centerItem}>
              <FavoriteBorderIcon />
            </Grid>
          </Grid>
        </Paper>
      </ListItem>
    </List>
  );
};

export default Favorite;
