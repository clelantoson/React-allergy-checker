import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./router/Routes";
import Navigation from "./components/Navigation/Navigation";
import "./App.css";
import Header from "./components/Header/Header";
import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
  return (
    <>
      <BrowserRouter>
        <CssBaseline />
        <Header />
        <Routes />
        <Navigation />
      </BrowserRouter>
    </>
  );
}

export default App;
