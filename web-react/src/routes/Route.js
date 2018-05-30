import React from "react";
import { Route, Router } from "react-router-dom";

// Import Component Dependencies.
import history from "../history";
import Widget from "../dashboard/Widget";
import Profile from "../user/Profile";
import App from "../App";

// Import Auth Dependencies
import Auth from "../auth/Auth";
import Callback from "../callback/Callback";

const auth = new Auth();

const handleAuthentication = ({ location }) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
};

export const buildRoutes = () => {
  return (
    <Router history={history}>
      <div>
        <Route path="/" render={props => <App auth={auth} {...props} />} />
        <Route
          path="/home"
          render={props => <Widget auth={auth} {...props} />}
        />
        <Route
          path="/dashboard"
          render={props => <Widget auth={auth} {...props} />}
        />
        <Route
          path="/profile"
          render={props => <Profile auth={auth} {...props} />}
        />
        <Route
          path="/callback"
          render={props => {
            handleAuthentication(props);
            return <Callback {...props} />;
          }}
        />
        <Route
          path="/login"
          render={props => {
            return auth.login.bind(this);
          }}
        />
      </div>
    </Router>
  );
};
