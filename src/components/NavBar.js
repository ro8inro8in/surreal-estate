import React from "react";
import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <img src="/images/logo.png" alt="navbar-logo" />
      <ul className="navbar-links">
        <ul className="navbar-links-item">
          <li>
            <a href="/"> View Properties </a>
          </li>
          <li>
            <a href="/">Add a Property</a>
          </li>
        </ul>
      </ul>
    </div>
  );
};

export default NavBar;
