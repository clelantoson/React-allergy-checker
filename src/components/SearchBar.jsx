import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import TextField from "@material-ui/core/TextField";
// import { List, makeStyles } from "@material-ui/core";
// import Divider from '@material-ui/core/Divider';
// import StarIcon from '@material-ui/icons/Star';
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
// import { shadows } from '@material-ui/system';
import axios from "axios";
//import ProductItem from "./Product/ProductItem";
import ProductList from "./Product/ProductList";
import { makeStyles } from "@material-ui/core";

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

const SearchBar = () => {
  // console.log("in searchbar");
  const [products, setProducts] = useState([]);
  const [productInput, setProductInput] = useState("");

  const [debouncedProductInput] = useDebounce(productInput, 700);

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
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.log("Error getting fake data: " + error);
      });
  }, [debouncedProductInput]);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.textField}>
        <TextField
          id="outlined-search"
          label="Search a product"
          onChange={(event) => setProductInput(event.target.value)}
          value={productInput}
          type="search"
          variant="outlined"
          className={classes.searchBar}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </div>
      <ProductList key={products.id} products={products} />

      {/* <ul> */}
      {/* {console.log("products to display", products)} */}
      {/* {products.map((product) => {
          return <li key={product.id}>{product.generic_name}</li>;
        })} */}
      {/* {products.map((product) => ( */}

      {/* <li key={product.id}>{product.generic_name}</li> */}

      {/* ))} */}
      {/* <ProductList products={products} /> */}
      {/* </ul> */}
    </div>
  );
};

export default SearchBar;
