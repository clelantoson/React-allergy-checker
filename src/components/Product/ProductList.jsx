import React from "react";
import {
  ListItem,
  Paper,
  //   Avatar,
  //   // IconButton,
  //   ListItem,
  //   ListItemAvatar,
  //   ListItemText,
  makeStyles,
  Grid,
  ListItemAvatar,
  Avatar,
  ListItemText,
  //   CheckCircleOutlineIcon
  //   Grid,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
// import Paper from "@material-ui/core/Paper";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

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
}));

const ProductList = ({ product }) => {
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
          {/* `product/${product.id}` */}
          {/* <Button variant="contained" >Détail</Button> */}

          <Grid item lg={2} className={classes.centerItem}>
            <CheckCircleOutlineIcon className={classes.circleIcon} />
          </Grid>
        </Grid>
      </Paper>
    </ListItem>
  );
};

export default ProductList;
