import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import axios from "axios";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";
import SideBar from "./SideBar";
import "../styles/Properties.css";

const Properties = (userID) => {
  const [properties, setProperties] = useState([]);
  console.log(properties);
  const [alert, setAlert] = useState({ message: "" });

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/PropertyListing`)
      .then(({ data }) => {
        setProperties(data);
        setAlert({
          message: "Property Added",
          isSuccess: true,
        });
      })
      .catch(() => {
        setAlert({
          message: "Server error. Please try again later.",
          isSuccess: false,
        });
      });
  }, []);

  const { search } = useLocation();
  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/PropertyListing${search}`)
      .then(({ data }) => setProperties(data))
      .catch(() => {
        setAlert({
          message: "Server error. Please try again later.",
          isSuccess: false,
        });
      });
  }, [search]);

  if (!alert.isSuccess) {
    return <Alert message={alert.message} success={alert.isSuccess} />;
  }
  /*---------save----------*/
  const handleSaveProperty = (propertyId) => {
    axios.post("http://localhost:4000/api/v1/Favourite", {
      propertyListing: propertyId,
      fbUserId: userID,
    });
  };
  return (
    <section className="properties">
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="propertyCards">
        {properties.map((property) => (
          <PropertyCard
            key={property._id}
            {...property}
            userID={userID}
            onSaveProperty={handleSaveProperty}
          />
        ))}
      </div>
    </section>
  );
};

PropertyCard.propTypes = {
  userID: PropTypes.number.isRequired,
};

export default Properties;
