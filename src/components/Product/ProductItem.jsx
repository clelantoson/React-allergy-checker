import React from "react";
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Grid,
} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import CheckCircleRoundedIcon from "@material-ui/icons/CheckCircleRounded";
import WarningRoundedIcon from "@material-ui/icons/WarningRounded";
import { useHistory } from "react-router-dom";

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

const ProductItem = ({ product }) => {
  // console.log(product);
  // const allergens = true;
  const history = useHistory();
  const handleClick = () => {
    history.push({
      pathname: `/product/${product.id}`,
    });
  };
  const classes = useStyles();
  return (
    <ListItem
      onClick={handleClick}
      className={classes.listItem}
      key={product.id}
      alignItems="center"
    >
      <Paper className={classes.paper} elevation={1}>
        <Grid wrap="nowrap" container>
          <Grid item lg={2} className={classes.centerItem}>
            <ListItemAvatar className={classes.listItemAvatar}>
              <Avatar src={product.image_front_url} />
            </ListItemAvatar>
          </Grid>
          <Grid item lg={8} className={classes.fullWidth}>
            <ListItemText
              primary={product.product_name}
              secondary={product.id}
            />
          </Grid>
          <Grid item lg={2} className={classes.centerItem}>
            {product.allergens_tags.length || product.traces_tags.length > 0 ? (
              <WarningRoundedIcon className={classes.warningRoundedIcon} />
            ) : (
              <CheckCircleRoundedIcon className={classes.checkIcon} />
            )}
          </Grid>
        </Grid>
      </Paper>
    </ListItem>
  );
};

export default ProductItem;
