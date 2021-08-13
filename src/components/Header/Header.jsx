import React from "react";
//import { makeStyles } from "@material-ui/core";
import "./Header.css";
import nutLogo from "./nut.png";

const Header = () => {
  return (
    <div className="containerHeader">
      <h1>Allergy Checker</h1>
      <a href="/">
        <img className="logo" src={nutLogo} alt="Logo de allergy checker" />
      </a>
    </div>
  );
};

export default Header;
