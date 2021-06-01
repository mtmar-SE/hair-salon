import React from "react";
import "../assets/styles/header.css";

const Header = () => {
  return (
    <div className="header">
      <h1 className="header-title">Hosei Salon</h1>
      <div className="header-wrap">
        <p className="header-contents">MENU</p>
        <p className="header-contents">CONCEPT</p>
        <p className="header-contents">ACCESS</p>
        <p className="header-contents">RESERVE</p>
      </div>
    </div>
  );
};

export default Header;
