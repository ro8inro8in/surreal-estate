import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";
import SideBar from "./SideBar";
import "../styles/Properties.css";

const Properties = () => {
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
  return (
    <section className="properties">
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="propertyCards">
        {properties.map((property) => (
          <PropertyCard key={property._id} {...property} />
        ))}
      </div>
    </section>
  );
};

export default Properties;
