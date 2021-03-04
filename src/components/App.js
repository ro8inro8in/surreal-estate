import React from "react";
import "../styles/App.css";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";
import SideBar from "./SideBar";

import "./Alert";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <SideBar />
      <h1>Welcome to Surreal Estate</h1>
      <div className="navlinks">
        <Switch>
          <Route exact path="/">
            <Properties />
          </Route>
          <Route exact path="/AddProperty">
            <AddProperty />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default App;
