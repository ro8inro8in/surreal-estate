import React from "react";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";
import FacebookLogin from "react-facebook-login";
import PropTypes from "prop-types";
import { FaFacebookSquare } from "react-icons/fa";

const NavBar = ({ onLogin, userId, onLogout }) => {
  return (
    <div className="navbar">
      <img src="/images/logo.png" alt="navbar-logo" />
      <div className="navbar-menu">
        <li>
          <Link className="nav-links" to="/">
            View Properties
          </Link>
        </li>
        <li>
          <Link className="nav-links" to="/AddProperty">
            Add Property
          </Link>
        </li>
        <li>
          <Link className="nav-links" to="/SavedProperties">
            Saved Properties
          </Link>
        </li>
      </div>

      {userId ? (
        <button type="button" onClick={onLogout}>
          <FaFacebookSquare />
          Log out
        </button>
      ) : (
        <FacebookLogin
          appId="442074327121841"
          fields="name,email,picture"
          callback={onLogin}
          cssClass="facebook"
        />
      )}
    </div>
  );
};

NavBar.propTypes = {
  onLogin: PropTypes.func.isRequired,
  userId: PropTypes.number.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default NavBar;
