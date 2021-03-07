import React from "react";
import "../styles/PropertyCard.css";
import PropTypes from "prop-types";
import { FaBed, FaBath, FaPoundSign, FaMailBulk } from "react-icons/fa";

const PropertyCard = (props) => {
  console.log(props);
  const {
    _id,
    bathrooms,
    bedrooms,
    city,
    email,
    price,
    title,
    type,
    userID,
    onSaveProperty,
    onDeleteProperty,
  } = props;
  return (
    <div className="property-card">
      <div className="property-container">
        <img src="/images/StockSnap_WCDXCVV2ZX.jpg" alt="navbar-logo" />
        <div className="property-card-bathrooms">
          <FaBath /> 2<span>{bathrooms}</span>
        </div>
        <div className="property-card-bedrooms">
          <FaBed /> 2<span>{bedrooms}</span>
        </div>
        <div className="property-card-city">{city}</div>
        <div className="property-card-email">
          <FaMailBulk />
          {email}
        </div>
        <div className="property-card-price">
          <FaPoundSign />
          {price}
        </div>
        <div className="property-card-title">
          4 bed Flat Manchester
          {title}
        </div>
        <div className="property-card-type">
          Flat - Manchester
          {type}
        </div>
      </div>
      {userID && (
        <div className="save-button">
          <button type="button" onClick={() => onSaveProperty(_id)}>
            Save
          </button>
        </div>
      )}
      {userID && (
        <div className="delete-button">
          <button type="button" onClick={() => onDeleteProperty(_id)}>
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

PropertyCard.propTypes = {
  bathrooms: PropTypes.string.isRequired,
  bedrooms: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  userID: PropTypes.string.isRequired,
  onSaveProperty: PropTypes.func.isRequired,
  _id: PropTypes.string.isRequired,
  onDeleteProperty: PropTypes.func.isRequired,
};

export default PropertyCard;
