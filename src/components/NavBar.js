import React from "react";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";
import FacebookLogin from "react-facebook-login";
import PropTypes from "prop-types";

const NavBar = ({ onLogin, userId, onLogout }) => {
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
          <li>
            <Link className="saved-property" to="/SavedProperties">
              Saved Properties
            </Link>
          </li>
        </ul>
        {userId ? (
          <button type="button" onClick={onLogout}>
            Log out
          </button>
        ) : (
          <FacebookLogin
            appId="442074327121841"
            fields="name,email,picture"
            callback={onLogin}
          />
        )}
      </ul>
    </div>
  );
};

NavBar.propTypes = {
  onLogin: PropTypes.func.isRequired,
  userId: PropTypes.number.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default NavBar;
