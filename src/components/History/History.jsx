import React, { useEffect, useState } from "react";
import ProductList from "../Product/ProductList";

const History = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productHistory =
      JSON.parse(localStorage.getItem("product_history")) || [];
    setProducts(productHistory);
  }, []);
  return <ProductList products={products} />;
};

export default History;
