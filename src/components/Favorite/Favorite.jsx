import { List, makeStyles } from "@material-ui/core";
import React from "react";
import ProductItem from "../Product/ProductItem";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: "100%",
    overflowY: "auto",
  },
  fullWidth: { width: "100%" },
  searchBar: {
    width: "50%",
  },
  textField: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "1rem",
  },
  list: {},
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

const Favorite = (products) => {
  const classes = useStyles();
    return (
      <List className={classes.list}>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </List>
    );
  };

export default Favorite;