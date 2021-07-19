import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./router/Routes";
import Navigation from "./components/Navigation";
// add css
import 'normalize.css';
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes />
      </BrowserRouter>
    </>
  );
}

export default App;
