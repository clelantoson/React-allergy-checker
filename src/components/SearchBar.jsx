import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core";
import axios from "axios";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
  },
  searchBar: {
    width: "50%",
  },
});

const SearchBar = () => {
  console.log("in searchbar");
  const [products, setProducts] = useState([]);
  const [productInput, setProductInput] = useState("");

  useEffect(() => {
    console.log("start search with", productInput);
    if (productInput.length === 0) {
      setProducts([]);
      return;
    }
    const API_URL_SEARCH = `https://fr.openfoodfacts.org/cgi/search.pl?search_simple=1&json=1&search_terms=${productInput}`;

    axios
      .get(API_URL_SEARCH)
      .then((response) => {
        // // eslint-disable-next-line no-debugger
        // debugger;
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.log("Error getting fake data: " + error);
      });
  }, [productInput]);

  console.log("products", products);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TextField
        id="outlined-search"
        label="Search a product"
        onChange={(event) => setProductInput(event.target.value)}
        value={productInput}
        type="search"
        variant="outlined"
        className={classes.searchBar}
      />
      <ul>
        {console.log("products to display", products)}
        {/* {products.map((product) => {
          return <li key={product.id}>{product.generic_name}</li>;
        })} */}
        {products.map((product) => (
          <li key={product.id}>{product.generic_name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
