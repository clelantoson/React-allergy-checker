import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
// import { fetchProducts } from "../redux/api/testApi";
// import { connect } from 'react-redux';
import { makeStyles } from "@material-ui/core";
import axios from 'axios';
// import { Fragment } from "react";

const useStyles = makeStyles({
  root: {
    margin: 0,
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
});



const Home = () => {
  const classes = useStyles();
  const [product, setProduct] = useState({ results: []});
  
  useEffect(() => {
      // const URL = "https://world.openfoodfacts.org/api/v0/product/0737628064502";
      axios
        .get(URL)
        .then((response) => {
          setProduct(response.data.product);
        })
    }, []);
  console.log("product:", product);
  

  return (
    <div className={classes.root}>
      <SearchBar />
      {/* {data.product.map((s) => (
        <p key={s.product.id}>{data.product.id}</p>
      ))} */}
      <ul>
        {/* <li key={product.id}> */}
          {/* <p>{ product.product_name_en }</p> */}
          {/* <img src={ product.image_front_url } alt="" />  */}
          {/* </li> */}
      </ul>
      {/* {data.map((data, product_name) => (
        <p key={data.id}>{product_name}</p>
      ))} */}
    </div>
  );
};

// const mapStateToProps = state => ({
//     produits: state.produits,
//     // produitsPanier: state.produitsPanier,
//     // loading: state.loading,
//     // error: state.error
//   });

export default Home;
// export default connect(Home);
