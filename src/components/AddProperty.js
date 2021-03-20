import React, { useState } from "react";
import "../styles/AddProperty.css";
import axios from "axios";
import Alert from "./Alert";

const AddProperty = () => {
  const initialState = {
    fields: {
      title: "",
      city: "Manchester",
      type: "",
      bathrooms: "",
      bedroom: "",
      email: "",
      price: "",
    },
    alert: {
      message: "",
      isSuccess: false,
    },
  };

  const [fields, setFields] = useState(initialState.fields);
  const [alert, setAlert] = useState(initialState.alert);

  const handleAddProperty = (event) => {
    event.preventDefault();
    setAlert({ message: "", isSuccess: false });
    axios
      .post(`http://localhost:4000/api/v1/PropertyListing`, fields)
      .then(() => {
        setAlert({
          message: "Property Added",
          isSuccess: true,
        });
      })
      .catch(() =>
        setAlert({
          message: "Server error. Please try again later.",
          isSuccess: false,
        })
      );
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };
  console.log(fields.bedroom);
  return (
    <div className="addproperty">
      <h1>Welcome to Surreal Estate</h1>
      <div className="form-container">
        <h2>Add Property</h2>
        <Alert message={alert.message} success={alert.isSuccess} />
        <form onSubmit={handleAddProperty}>
          <div className="form-elements">
            <label htmlFor="title">
              <input
                placeholder="search"
                id="title"
                name="title"
                value={fields.title}
                onChange={handleFieldChange}
              />
            </label>
          </div>
          <div className="form-elements">
            <label htmlFor="city">
              <select
                placeholder="City/Town"
                id="city"
                name="city"
                value={fields.city}
                onChange={handleFieldChange}
              >
                <option value="Manchester">Manchester</option>
                <option value="Leeds">Leeds</option>
                <option value="Sheffield">Sheffield</option>
                <option value="Liverpool">Liverpool</option>
              </select>
            </label>
          </div>
          <div className="form-elements">
            <label htmlFor="type">
              <select
                placeholder="Type of property"
                id="type"
                name="type"
                value={fields.type}
                onChange={handleFieldChange}
              >
                <option value="Flat">Flat</option>
                <option value="Detached">Detached</option>
                <option value="Semi-Detached">Semi-Detached</option>
                <option value="Terraced">Terraced</option>
                <option value="End Terraced">End Terraced</option>
                <option value="Cottage">Cottage</option>
                <option value="Bungalow">Bungalow</option>
              </select>
            </label>
          </div>
          <div className="form-elements">
            <label htmlFor="bathroom">
              <select
                placeholder="Number of bathrooms"
                id="bathroom"
                name="bathroom"
                value={fields.bathroom}
                onChange={handleFieldChange}
              >
                <option value="1 Bathroom">1 Bathroom</option>
                <option value="2 Bathroom">2 Bathroom</option>
                <option value="3 Bathroom">3 Bathroom</option>
                <option value="4 Bathroom">4 Bathroom</option>
              </select>
            </label>
          </div>
          <div className="form-elements">
            <label htmlFor="bedrooms">
              <select
                placeholder="Number of bedrooms"
                id="bedrooms"
                name="bedroom"
                value={fields.bedroom}
                onChange={handleFieldChange}
              >
                <option value="1 Bedrooms">1 Bedroom</option>
                <option value="2 Bedrooms">2 Bedrooms</option>
                <option value="3 Bedrooms">3 Bedrooms</option>
                <option value="4 Bedrooms">4 Bedrooms</option>
                <option value="5 Bedrooms">5 Bedrooms</option>
                <option value="6 Bedrooms">6 Bedrooms</option>
              </select>
            </label>
          </div>
          <div className="form-elements">
            <label htmlFor="email">
              <input
                placeholder="email"
                id="email"
                name="email"
                value={fields.email}
                onChange={handleFieldChange}
              />
            </label>
          </div>
          <div className="form-elements">
            <label htmlFor="price">
              <input
                placeholder="price"
                id="price"
                name="price"
                value={fields.price}
                onChange={handleFieldChange}
              />
            </label>
          </div>
          <button className="add-btn" type="submit">
            Add Me !!
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProperty;
