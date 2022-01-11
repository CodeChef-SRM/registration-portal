import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import Team from "./pages/Team/Team";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/">
            <LandingPage />
          </Route>
          <Route path="/dashboard">
            <Team />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
