import React from "react";
import PropTypes from "prop-types";


const PropertyCard = (props) => {
  const { bathrooms, bedrooms, city, email, price, title, type } = props;
  return (
    <div className="PropertyCard">
      <div className="bathrooms">
        bathrooms:
        {bathrooms.max}
      </div>
      <div className="bedrooms">
        bedrooms:
        {bedrooms.max}
      </div>
      <div className="city">
        city:
        {city}
      </div>
      <div className="email">
        email:
        {email}
      </div>
      <div className="price">
        price:
        {price.max}
      </div>
      <div className="title">
        title:
        {title}
      </div>
      <div className="type">
        type:
        {type}
      </div>
    </div>
  );
};

export default PropertyCard;

PropertyCard.propTypes = {
  bathrooms: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
  }).isRequired,
  bedrooms: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
  }).isRequired,
  city: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
