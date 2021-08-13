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
  Grid
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


const useStyles = makeStyles((theme) =>({
  root: {
    // width: "100%",
    width: theme.spacing(50),
    top: "100",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    margin: theme.spacing(2),
  },
  searchBar: {
    width: "50%",
    margin: "0 auto",
    display: "block",
  },
  list: {
    width: "100%",
    height: "500px",
    marginBottom: "100px",
  },
  listItem: {
    // width: "100%",
    // width: theme.spacing(50),
    // margin: "20px 0 0 0",
    margin: theme.spacing(2),
    padding: "0 30px 0 30px",
    // border: "1px solid black",
    borderRadius: "20px",
    // boxShadow: "0px 0.630645px 1.26129px", rgba("97, 97, 97, 0.2")
    width: "70%",
  },
  paper: {
    width: "100%"
  }
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
