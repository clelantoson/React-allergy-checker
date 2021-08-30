import React from "react";
//import { makeStyles } from "@material-ui/core";
import "./Header.css";
import nutLogo from "./nut.png";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  const handleOnClick = () => {
    history.push({
      pathname: `/`,
    });
  };
  return (
    <div className="containerHeader" onClick={handleOnClick}>
      <h1>Allergy Checker</h1>
      <img className="logo" src={nutLogo} alt="Logo de allergy checker" />
    </div>
  );
};

export default Header;
