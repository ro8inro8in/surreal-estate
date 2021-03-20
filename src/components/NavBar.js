import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";
import FacebookLogin from "react-facebook-login";
import PropTypes from "prop-types";
import { FaFacebookSquare } from "react-icons/fa";

const NavBar = ({ onLogin, userID, onLogout }) => {
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
        {userID ? (
          <li>
            <Link className="nav-links" to="/SavedProperties">
              Saved Properties
            </Link>
          </li>
        ) : (
          " "
        )}
      </div>

      {userID ? (
        <button className="facebook" type="button" onClick={onLogout}>
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
  userID: PropTypes.number.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default NavBar;
