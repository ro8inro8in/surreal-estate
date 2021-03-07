import React, { useState } from "react";
import "../styles/App.css";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";
import SavedProperties from "./SavedProperties";
import "./Alert";
// import FacebookLogin from "./FaceBookLogin";

const App = () => {
  const [userId, setUserId] = useState("");

  const handleLogin = (response) => {
    setUserId(response.userID);
  };

  const handleLogout = () => {
    window.FB.logout(() => {});
    setUserId("");
  };

  return (
    <div className="App">
      <NavBar onLogin={handleLogin} userId={userId} onLogout={handleLogout} />
      <div className="navlinks">
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <Properties {...props} userId={userId} />}
          />
          <Route exact path="/AddProperty">
            <AddProperty />
          </Route>
          <Route exact path="/SavedProperties">
            <SavedProperties />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default App;
