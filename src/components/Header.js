import React from "react";
import "../assets/styles/header.css";

const Header = () => {
  return (
    <section id="header">
      <h1 className="header-title">HoseiSalon</h1>
      <div className="header-wrap">
        <ul>
          <li>
            <a href="#menu" className="header-contents">
              MENU
            </a>
          </li>
          <li>
            <a href="#concept" className="header-contents">
              CONCEPT
            </a>
          </li>
          <li>
            <a href="#access" className="header-contents">
              ACCESS
            </a>
          </li>
          <li>
            <a href="#reserve" className="header-contents">
              RESERVE
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Header;
