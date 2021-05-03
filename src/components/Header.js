import React from "react";
import logo from "../img/logo.png";
import spinner from "../img/spinner.gif";

const Header = () => {
  return (
    <header className="center">
      <img className="spinner" src={spinner} alt="" />
      <img className="logo" src={logo} alt="" />
    </header>
  );
};

export default Header;
