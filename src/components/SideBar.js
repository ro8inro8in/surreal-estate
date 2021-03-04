import React from "react";
import "../styles/SideBar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="side-bar-links">
        <Link to={`/?query={"city": "Manchester"}`}>Manchester</Link>
        <Link to={`/?query={"city": "Leeds"}`}>Leeds</Link>
        <Link to={`/?query={"city": "Sheffield"}`}>Sheffield</Link>
        <Link to={`/?query={"city": "Liverpool"}`}>Liverpool</Link>
      </ul>
    </div>
  );
};

export default Sidebar;
