import React, { useState } from "react";
import "../styles/SideBar.css";
import { Link, useLocation, useHistory } from "react-router-dom";
import qs from "qs";
import { FaSearch } from "react-icons/fa";

const buildQueryString = (operation, valueObj, search) => {
  const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });

  const newQueryParams = {
    ...currentQueryParams,
    [operation]: JSON.stringify({
      ...JSON.parse(currentQueryParams[operation] || "{}"),
      ...valueObj,
    }),
  };
  return qs.stringify(newQueryParams, { addQueryPrefix: true, encode: false });
};

const SideBar = () => {
  const { search } = useLocation();
  const [query, setQuery] = useState("");
  const history = useHistory();
  const handleSearch = (event) => {
    event.preventDefault();
    const newQueryString = buildQueryString("query", {
      title: { $regex: query },
    });
    history.push(newQueryString);
  };

  return (
    <div className="sidebar-container">
      <div className="search-input">
        <form onSubmit={handleSearch}>
          <input
            placeholder="search"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="s-btn" type="submit">
            <FaSearch />
          </button>
        </form>
      </div>
      <h3>Filter By City</h3>
      <Link
        className="filter-links"
        to={buildQueryString("query", { city: "Manchester" }, search)}
      >
        {" "}
        Manchester
      </Link>
      <Link
        className="filter-links"
        to={buildQueryString("query", { city: "Leeds" }, search)}
      >
        {" "}
        Leeds
      </Link>
      <Link
        className="filter-links"
        to={buildQueryString("query", { city: "Sheffield" }, search)}
      >
        {" "}
        Sheffield
      </Link>
      <Link
        className="filter-links"
        to={buildQueryString("query", { city: "Liverpool" }, search)}
      >
        {" "}
        Liverpool
      </Link>
      <h3>Sort by</h3>
      <Link
        className="filter-links"
        to={buildQueryString("sort", { price: 1 }, search)}
      >
        {" "}
        Price Ascending
      </Link>
      <Link
        className="filter-links"
        to={buildQueryString("sort", { price: -1 }, search)}
      >
        {" "}
        Price Descending
      </Link>
      {/* </ul> */}
    </div>
  );
};

export default SideBar;
