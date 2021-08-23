import React from "react";
import SearchBar from "./SearchBar";
// import { fetchProducts } from "../redux/api/testApi";
// import { connect } from 'react-redux';

const Home = () => {
  return (
    <>
      {/* if allergens.user is empty return <AllergensSelection/> */}
      <SearchBar />
    </>
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
