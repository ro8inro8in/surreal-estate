import React from "react";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <img src="/images/logo.png" alt="navbar-logo" />
      <ul className="navbar-links">
        <ul className="navbar-links-item">
          <li>
            <Link className="View-properties" to="/">
              View Properties
            </Link>
          </li>
          <li>
            <Link className="add-property" to="/AddProperty">
              Add Property
            </Link>
          </li>
        </ul>
      </ul>
    </div>
  );
};

export default NavBar;
