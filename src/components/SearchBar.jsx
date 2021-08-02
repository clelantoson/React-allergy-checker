import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core";
import axios from "axios";
// import { useParams } from "react-router-dom";

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
  const [product, setProduct] = useState({ results: [] });
  // const [filteredData,setFilteredData] = useState(product);
  useEffect(() => {
    const API_URL_SEARCH = `https://fr.openfoodfacts.org/cgi/search.pl?search_simple=1&json=1&search_terms=`;
    // const URL = `https://world.openfoodfacts.org/api/v0/product`;
    axios
      .get(API_URL_SEARCH)
      .then(response => {
      console.log(response.data);
      setProduct(response.data);
      // setFilteredData(response.data);
          // setProduct(response.data.product);
        })
    }, []);
  console.log("product:", product);
  
  // const [alimentsTab, setAlimentsTab] = useState();
  // const [alimentToAdd, setAlimentToAdd] = useState("");
  // const handleSearch = (event) =>{
  //}
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
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* <Aliments alimentsTab={alimentsTab} /> */}
      <TextField
        id="outlined-search"
        label="Search a product"
        onChange={handleOnChange}
        // value={setProduct}
        onKeyDown={handleKeyDown}
        type="text"
        variant="outlined"
        className={classes.searchBar}
      />
      <ul>
        <li key={product.id}>
          <p>{product.product_name_en}</p>
        </li>
      </ul>
    </div>
  );
};

export default SearchBar;
