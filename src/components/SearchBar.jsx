import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import TextField from "@material-ui/core/TextField";
import {
  Avatar,
  // IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Grid,
} from "@material-ui/core";
// import Divider from '@material-ui/core/Divider';
// import StarIcon from '@material-ui/icons/Star';
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import Paper from "@material-ui/core/Paper";

// import { shadows } from '@material-ui/system';
import axios from "axios";
// import ProductList from "./ProductList/ProductList";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: "100%",
    overflowY: "auto",
  },
  searchBar: {
    width: "50%",
  },
  textField: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "4px",
  },
  list: {},
  listItem: {
    padding: "0 30px 0 30px",
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
        // // eslint-disable-next-line no-debugger
        // debugger;
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.log("Error getting fake data: " + error);
      });
  }, [debouncedProductInput]);

  // console.log("products", products);

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
      <List className={classes.list}>
        {console.log("products to display2", products)}
        {products.map((product) => (
          <ListItem
            className={classes.listItem}
            key={product.id}
            alignItems="flex-start"
          >
            <Paper className={classes.paper} elevation={19}>
              <Grid wrap="nowrap" container>
                <Grid item lg={2}>
                  <ListItemAvatar>
                    <Avatar src={product.image_front_url} />
                  </ListItemAvatar>
                </Grid>
                <Grid item lg={8}>
                  <ListItemText
                    primary={product.product_name}
                    secondary={product.id}
                  />
                </Grid>
                <Grid item lg={2}>
                  <CheckCircleOutlineIcon />
                </Grid>
              </Grid>
            </Paper>
          </ListItem>
        ))}
      </List>
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
