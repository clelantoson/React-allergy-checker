import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./router/Routes";
import Navigation from "./components/Navigation";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes />
        <Navigation />
      </BrowserRouter>
    </>
  );
}

export default App;
