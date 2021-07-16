import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./router/Routes";
import Navigation from "./components/Navigation";

import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header 
          imgSrc="https://picsum.photos/200/300"
        />
        <Routes />
        <Navigation />
      </BrowserRouter>
    </>
  );
}

export default App;
