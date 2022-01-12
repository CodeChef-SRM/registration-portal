import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TeamState from "./context/Team/TeamState";
import UserState from "./context/User/UserState";
import Dashboard from "./pages/Dashboard/Dashboard";
import LandingPage from "./pages/LandingPage/LandingPage";

const App = () => {
  return (
    <>
      <TeamState>
        <UserState>
          <Router>
            <div>
              <Switch>
                <Route exact path="/">
                  <LandingPage />
                </Route>
                <Route exact path="/dashboard">
                  <Dashboard />
                </Route>
              </Switch>
            </div>
          </Router>
        </UserState>
      </TeamState>
    </>
  );
};

export default App;
