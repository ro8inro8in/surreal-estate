import React, { useEffect, useState } from "react";
import "../styles/PropertyCard.css";
import PropTypes from "prop-types";
import { FaBed, FaBath, FaPoundSign, FaMailBulk } from "react-icons/fa";

const PropertyCard = (props) => {
  const {
    title,
    propertyId,
    city,
    type,
    bathrooms,
    bedrooms,
    price,
    email,
    userID,
    onSaveProperty,
    onDeleteProperty,
    myProperties,
    favouriteId,
  } = props;

  const [showDelete, setShowDelete] = useState(false);

  useEffect(() => {
    if (myProperties && userID) {
      setShowDelete(true);
    }
  }, [myProperties]);

  return (
    <div className="property-card">
      <div className="property-container">
        <div className="property-card-title">{title}</div>
        <div className="property-card-type">{type}</div>
        <div className="property-card-city">{city}</div>
        <div className="property-card-bathrooms">
          <FaBath /> 2<span>{bathrooms}</span>
        </div>
        <div className="property-card-bedrooms">
          <FaBed /> 2<span>{bedrooms}</span>
        </div>
        <div className="property-card-price">
          <FaPoundSign />
          {price}
        </div>

        <div className="property-card-email">
          <FaMailBulk />
          {email}
        </div>
      </div>
      {userID && !showDelete && (
        <button
          className="card-btn"
          type="button"
          onClick={() => onSaveProperty(propertyId)}
        >
          Save
        </button>
      )}
      {showDelete &&
        myProperties.filter((e) => propertyId === e.propertyListing._id) && (
          <button
            className="card-btn"
            type="button"
            onClick={() => onDeleteProperty(favouriteId)}
          >
            Delete
          </button>
        )}
    </div>
  );
};

PropertyCard.defaultProps = {
  myProperties: undefined,
};

PropertyCard.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  bedrooms: PropTypes.number.isRequired,
  bathrooms: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  userID: PropTypes.string.isRequired,
  onSaveProperty: PropTypes.func.isRequired,
  onDeleteProperty: PropTypes.func.isRequired,
  propertyId: PropTypes.string.isRequired,
  myProperties: PropTypes.arrayOf(PropTypes.any),
  favouriteId: PropTypes.string.isRequired,
};

export default PropertyCard;
