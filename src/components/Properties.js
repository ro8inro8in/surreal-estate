import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";
import "../styles/PropertyCard.css";
import SideBar from "./SideBar";

const Properties = () => {
  const [properties, setProperties] = useState([]);
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
      .get(`http://localhost:4000/api/v1/PropertyListing`)
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
  return (
    <div className="properties">
      <div className="sidebar">
        <SideBar />
      </div>
      {properties.map((property) => (
        <PropertyCard key={property._id} {...property} />
      ))}
    </div>
  );
};

export default Properties;
