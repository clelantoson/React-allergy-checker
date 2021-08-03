import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core";
import axios from "axios";
// import { useParams } from "react-router-dom";
const initial_state = {
  product: "",
  // cuisine: "",
  searchResults: [],
};

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
  },
  searchBar: {
    width: "50%",
  },
});

// const alimentsList = [
//   "Pizza",
//   "Burrata",
//   "Basilic",
//   "Tiramisu",
//   "Ricotta",
//   "Chocolat",
// ];

// const Aliments = ({ alimentsTab }) => {
//   if (alimentsTab.length == 0) {
//     return <p>Il ny pas pas de listes </p>;
//   } else {
//     return (
//       <ul>
//         {alimentsTab
//           .map((aliment, index) => (
//           <li key={index}> {aliment} </li>
//         ))}
//       </ul>
//     );
//   }
// };
// Connecter à l'api avec la bonne UrL
// affiche les produits qui correspondent à event.target.value

const SearchBar = () => {
         //state, setSate
  const [product, setProduct] = useState(initial_state);
  // const [filteredData,setFilteredData] = useState(product);
  // handleSubmit
  // handleChange
  useEffect(() => {
    const API_URL_SEARCH = `https://fr.openfoodfacts.org/cgi/search.pl?search_simple=1&json=1&search_terms=${product}`;
    // const URL = `https://world.openfoodfacts.org/api/v0/product`;
    axios.get(API_URL_SEARCH).then((response) => {
      console.log(response.data);
      // setProduct(response.data);
      // setFilteredData(response.data);
      // setProduct(response.data.product);
    });
  }, []);
  console.log("product:", product);

  // const [alimentsTab, setAlimentsTab] = useState();
  // const [alimentToAdd, setAlimentToAdd] = useState("");
  // const handleSearch = (event) =>{
  //}
  // const {product} = state;
  const handleOnChange = event => {
    setProduct({
      ...product,
      [event.target.value]: event.target.value
    });
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
 
  <div>
    <img src={product.image_front_url} alt="" />
  </div>

  return (
    <div className={classes.root}>
      {/* <Aliments alimentsTab={alimentsTab} /> */}
      <TextField
        id="outlined-search"
        label="Search a product"
        //onChange={handleChange}
        onChange={handleOnChange}
        //value={location}
        // name={product}
        value={product}
        // onKeyDown={handleKeyDown}
        type="text"
        variant="outlined"
        className={classes.searchBar}
      />
      <ul>
        <li key={product._id}>
          <p>{product._id}</p>
          <p>{product.product_name}</p>
        </li>
      </ul>
    </div>
  );
};

export default SearchBar;
