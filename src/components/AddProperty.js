import React, { useState } from "react";

const AddProperty = () => {
  const initialState = {
    fields: {
      title: "",
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
          title
          <input
            id="title"
            name="title"
            value={fields.title}
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
