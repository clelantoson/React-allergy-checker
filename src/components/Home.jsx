import React from "react";
import SearchBar from "./SearchBar";
// import { fetchProducts } from "../redux/api/testApi";
// import { connect } from 'react-redux';
import { makeStyles } from "@material-ui/core";

// import { Fragment } from "react";

const useStyles = makeStyles({
  root: {
    margin: 0,
    // height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
});



const Home = () => {
  const classes = useStyles();
  
  

  return (
    <div className={classes.root}>
      <SearchBar />
      {/* {data.product.map((s) => (
        <p key={s.product.id}>{data.product.id}</p>
      ))} */}
     
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
