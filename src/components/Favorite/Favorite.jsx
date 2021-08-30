import React, { useEffect, useState } from "react";
import ProductList from "../Product/ProductList";

const Favorite = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productFavorites =
      JSON.parse(localStorage.getItem("favorite_products")) || [];
    setProducts(productFavorites);
  }, []);
  return <ProductList products={products} />;
};

export default Favorite;
