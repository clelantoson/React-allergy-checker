import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Register from "../components/Auth/Register";
import Login from "../components/Auth/Login";
import Home from "../components/Home";
import ProductDetail from "../components/ProductDetail/ProductDetail";
import ProductFavoris from "../components/Product/ProductFavoris";
import FetchProduct from "../components/FetchProduct";
import Profile from "../components/Profile/Profile";
import AllergensSelection from "../components/AllergensSelection/AllergensSelection";
import ScannerDisplay from "../components/Scanner/ScannerDisplay";
// import History from "../components/History/History";
import NotFound from "../components/NotFound";
import { useSelector } from "react-redux";
import Favorite from "../components/Favorite/Favorite";
import History from "../components/History/History";
import Start from "../components/Start/Start";

const Routes = () => {
  // if (!JSON.parse(localStorage.getItem("user_allergens")))
  //   return <AllergensSelection />;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/product/:id" component={ProductDetail} />
      {/* <Route path="/recents" component={recents}/> */}
      <Route
        path="/profile"
        component={() =>
          userInfo?.token ? <Profile /> : <Redirect to="/login" />
        }
      />
      {/* <Route path="/profile" component={Profile} /> */}
      <Route path="/favorite" component={Favorite} />
      <Route path="/history" component={History} />
      <Route path="/productFavoris" component={ProductFavoris} />
      {/*

      
      <Route path="/product" component={ProductList}/> */}
      {/* <Route path="/profile" component={Profile} /> */}

      {/* <Route path="/profile" component={Favorite}/> */}
      {/* <Route path="/history" component={History} /> */}
      {/* <Route path="/product" component={ProductList}/> */}
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
      <Route path="/fetch" component={FetchProduct} />
      <Route path="/scan" component={ScannerDisplay} />
      <Route path="/start" component={Start} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default Routes;
