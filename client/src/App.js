import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Page1Default from "./pages/Page1Default/Page1Default";
import RegisterForEvent from "./pages/RegisterForEvent/RegisterForEvent";
import Team from "./pages/Team/Team";
import NewTeamMember from "./popups/NewTeamMember/NewTeamMember";
import TeamName from "./popups/TeamName/TeamName";
import EditTeamMember from "./popups/EditTeamMember/EditTeamMember";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/home">
            <Page1Default />
          </Route>
          <Route path="/registerForEvent">
            <RegisterForEvent />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/team">
            <Team />
          </Route>
          <Route path="/addMember">
            <NewTeamMember />
          </Route>
          <Route path="/teamDetails">
            <TeamName />
          </Route>
          <Route path="/editTeamMember">
            <EditTeamMember />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
