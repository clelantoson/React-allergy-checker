import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../components/Login";
import Home from "../components/Home";
import ProductDetail from "../components/ProductDetail/ProductDetail";
import FetchProduct from "../components/FetchProduct";
import Profile from "../components/Profile";
import AllergensSelection from "../components/AllergensSelection/AllergensSelection";
import ScannerDisplay from "../components/Scanner/ScannerDisplay";
import History from "../components/History/History";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/product/:id" component={ProductDetail} />
      <Route path="/profile" component={Profile} />

      {/* <Route path="/profile" component={Favorite}/> */}
      <Route path="/history" component={History} />
      {/* <Route path="/product" component={ProductList}/> */}
      <Route path="/allergens" component={AllergensSelection} />
      <Route path="/login" component={Login} />
      <Route path="/fetch" component={FetchProduct} />
      <Route path="/scan" component={ScannerDisplay} />
    </Switch>
  );
};

export default Routes;
