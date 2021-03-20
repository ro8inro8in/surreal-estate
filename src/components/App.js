import React, { useState, useEffect } from "react";
import "../styles/App.css";
import axios from "axios";
import { Switch, Route, Redirect } from "react-router-dom";
import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";
import SavedProperties from "./SavedProperties";
import "./Alert";

const App = () => {
  const [userID, setUserID] = useState("");
  const [savedProperties, setSavedProperties] = useState();
  const [myProperties, setMyProperties] = useState();

  const handleLogin = (response) => {
    setUserID(response.userID);
  };
  useEffect(() => {
    if (userID) {
      axios
        .get("http://localhost:4000/api/v1/Favourite")
        .then((results) => {
          setSavedProperties(results.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [userID]);

  const handleLogout = () => {
    window.FB.logout(() => {});
    setUserID("");
  };

  return (
    <div className="App">
      <NavBar onLogin={handleLogin} userID={userID} onLogout={handleLogout} />
      <div className="navlinks">
        <Switch>
          <Route exact path="/" render={() => <Properties userID={userID} />} />
          <Route exact path="/AddProperty">
            <AddProperty />
          </Route>
          <Route
            exact
            path="/SavedProperties"
            render={() =>
              userID ? (
                <SavedProperties
                  myProperties={myProperties}
                  setMyProperties={setMyProperties}
                  savedProperties={savedProperties}
                  userID={userID}
                />
              ) : (
                <Redirect to="/" />
              )
            }
          />
        </Switch>
      </div>
    </div>
  );
};

export default App;
