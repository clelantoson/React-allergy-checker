import React from "react";
import { Route, Switch } from "react-router-dom";
import Register from "../components/Auth/Register";
import Login from "../components/Auth/Login";
import Home from "../components/Home";
import ProductDetail from "../components/ProductDetail/ProductDetail";
import FetchProduct from "../components/FetchProduct";
import Profile from "../components/Profile";
import AllergensSelection from "../components/AllergensSelection/AllergensSelection";
import  NotFound  from "../components/NotFound";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/product/:id" component={ProductDetail} />
      {/* <Route path="/recents" component={recents}/> */}
      <Route path="/profile" component={Profile} />
      {/*
      <Route path="/profile" component={Favorite}/>
      <Route path="/history" component={History}/>
      <Route path="/product" component={ProductList}/> */}
      <Route path="/allergens" component={AllergensSelection} />
      <Route path="/login" component={Login} />
      <Route path="/Register" component={Register} exact />
      <Route path="/fetch" component={FetchProduct} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default Routes;
