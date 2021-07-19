import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../components/Login";
import Home from "../components/Home";
import Profile from "../components/Profile";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/profile" component={Profile}/>
      {/*  <Route path="/product" component={Product}/> */}
      {/* <Route path="/recents" component={recents}/> */}
      <Route path="/login" component={Login} />
      {/* <Route path="/" component={}/> */}
    </Switch>
  );
};

export default Routes;
