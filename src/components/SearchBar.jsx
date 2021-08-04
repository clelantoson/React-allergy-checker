import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core";
import axios from "axios";
// import { useParams } from "react-router-dom";
// const initial_state = {
//   product: "",
//   // cuisine: "",
//   searchResults: [],
// };

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
  },
  searchBar: {
    width: "50%",
  },
});


// Connecter à l'api avec la bonne UrL
// affiche les produits qui correspondent à event.target.value

const SearchBar = () => {
         //state, setSate
  const [product, setProduct] = useState();
  // const [filteredData,setFilteredData] = useState(product);
  // handleSubmit
  // handleChange
  useEffect(() => {
    const API_URL_SEARCH = `https://fr.openfoodfacts.org/cgi/search.pl?search_simple=1&json=1&search_terms=`;
    // const URL = `https://world.openfoodfacts.org/api/v0/product`;
    axios
      .get(API_URL_SEARCH)
      .then(response => {
      setProduct(response.data);
      // setFilteredData(response.data);
          // setProduct(response.data.product);
      })
      .catch(error => {
        console.log('Error getting fake data: ' + error);
      })
    }, []);
  console.log("test product:", product);
  
  const handleOnChange = (event) => setProduct(event.target.value);
  const handleOnClick = () => {
    setProduct([...product]);
    // setFilteredData("");
  };
  const handleKeyDown = (event) => {
    if (event.key == "Enter") {
      handleOnClick();
    }
  };

  // const handleOnClick = () => {
  //   setProduct([...product]);
  //   // setFilteredData("");
  // };
  // const handleKeyDown = (event) => {
  //   if (event.key == "Enter") {
  //     handleOnClick();
  //   }
  // };
  const classes = useStyles();
  // const {searchResults} = product;
  // const {searchResults} = state;


  return (
    <div className={classes.root}>
      
      <TextField
        id="outlined-search"
        label="Search a product"
        //onChange={handleChange}
        onChange={handleOnChange}
        //value={location}
        // name={product}
        // value={product}
        onKeyDown={handleKeyDown}
        type="search"
        variant="outlined"
        className={classes.searchBar}
      />
      <ul>
        <li>
         
      
        </li>
      </ul>
    </div>
  );
};

export default SearchBar;
