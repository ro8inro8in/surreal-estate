import React from "react";
import "../styles/App.css";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <h2>Welcome to Surreal Estate</h2>
      <div className="Navlinks">
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
