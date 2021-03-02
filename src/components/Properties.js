import React from "react";
import PropertyCard from "./PropertyCard";

const Properties = () => {
  return (
    <div>
      Properties page
      <PropertyCard
        title=""
        city="Manchester"
        type=""
        bathrooms={2}
        bedrooms={2}
        email=""
        price={1000000}
      />
    </div>
  );
};

export default Properties;
