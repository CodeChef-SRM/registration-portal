import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Alert from "./components/Alert/Alert";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import LoadingContext from "./context/Loading/LoadingContext";
import TeamState from "./context/Team/TeamState";
import UserState from "./context/User/UserState";
import Dashboard from "./pages/Dashboard/Dashboard";
import LandingPage from "./pages/LandingPage/LandingPage";

const App = () => {
    const loadingContext = useContext(LoadingContext);
    const { loader } = loadingContext;
    return (
        <>
            <TeamState>
                <UserState>
                    {
                        loader && <LoadingScreen />
                    }
                    <Alert />
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
