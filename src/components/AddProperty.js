import React, { useState } from "react";

const AddProperty = () => {
  const initialState = {
    fields: {
      title: "",
      city: "Manchester",
      type: "",
      bathrooms: "",
      bedroom: "",
      email: "Please Enter Email",
      price: "Name your price",
    },
  };
  const [fields, setFields] = useState(initialState.fields);

  const handleAddProperty = (event) => {
    event.preventDefault();
    console.log(fields);
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div className="AddProperty">
      Add Property:
      <form onSubmit={handleAddProperty}>
        <label htmlFor="title">
          Title:
          <input
            id="title"
            name="title"
            value={fields.title}
            onChange={handleFieldChange}
          />
        </label>
        <label htmlFor="city">
          <select
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
        <label htmlFor="type">
          <select
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
        <label htmlFor="bathroom">
          <select
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
        <label htmlFor="bathroom">
          <select
            id="bedroom"
            name="bedroom"
            value={fields.bedroom}
            onChange={handleFieldChange}
          >
            <option value="1 Bedroom">1 Bedroom</option>
            <option value="2 Bedroom">2 Bedroom</option>
            <option value="3 Bedroom">3 Bedroom</option>
            <option value="4 Bedroom">4 Bedroom</option>
            <option value="5 Bedroom">5 Bedroom</option>
            <option value="6 Bedroom">6 Bedroom</option>
          </select>
        </label>
        <label htmlFor="email">
          Email:
          <input
            id="email"
            name="email"
            value={fields.email}
            onChange={handleFieldChange}
          />
        </label>
        <label htmlFor="price">
          price:
          <input
            id="price"
            name="price"
            value={fields.price}
            onChange={handleFieldChange}
          />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddProperty;

// up to step 6 on the forms walkthrough
