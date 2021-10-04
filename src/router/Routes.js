import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Register from "../components/Auth/Register";
import Login from "../components/Auth/Login";
import ProductDetail from "../components/ProductDetail/ProductDetail";
import Profile from "../components/Profile/Profile";
import AllergensSelection from "../components/AllergensSelection/AllergensSelection";
import ScannerDisplay from "../components/Scanner/ScannerDisplay";
import History from "../components/History/History";
import Favorite from "../components/Favorite/Favorite";
import NotFound from "../components/NotFound";
import { useSelector } from "react-redux";
import Start from "../components/Start/Start";
import SearchBar from "../components/SearchBar";

const Routes = () => {
  if (!JSON.parse(localStorage.getItem("user_allergens")))
    return <AllergensSelection />;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <Switch>
      <Route exact path="/" component={Start} />
      <Route path="/product/:id" component={ProductDetail} />
      <Route
        path="/profile"
        component={() =>
          userInfo?.token ? <Profile /> : <Redirect to="/login" />
        }
      />
      <Route path="/profile" component={Profile} />
      <Route path="/search" component={SearchBar} />
      <Route path="/history" component={History} />
      <Route path="/favorite" component={Favorite} />
      <Route path="/allergens" component={AllergensSelection} />
      <Route
        path="/login"
        component={() =>
          !userInfo?.token ? <Login /> : <Redirect to="/profile" />
        }
      />
      <Route
        path="/Register"
        component={() =>
          !userInfo?.token ? <Register /> : <Redirect to="/profile" />
        }
      />
      <Route path="/scan" component={ScannerDisplay} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default Routes;
