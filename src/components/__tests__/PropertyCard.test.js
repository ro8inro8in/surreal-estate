import React from "react";
import { render } from "@testing-library/react";
import PropertyCard from "../PropertyCard";

describe("PropertyCard", () => {
  const validProps = {
    title: "",
    type: "Flat",
    bathrooms: {
      min: 1,
      max: 5,
    },
    bedrooms: {
      min: 1,
      max: 5,
    },
    price: 666,
    city: "Manchester",
    email: "",
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <PropertyCard
        title={validProps.title}
        type={validProps.type}
        bathrooms={validProps.bathrooms}
        bedrooms={validProps.bedrooms}
        price={validProps.price}
        city={validProps.city}
        email={validProps.email}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

