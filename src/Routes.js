import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import AppliedRoute from "./components/AppliedRoute";
import Signup from "./containers/Signup";
import NewNote from "./containers/NewNote";
import Notes from "./containers/Notes";
import Settings from "./containers/Settings";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";
import AuthenticatedRoute from "./components/AuthenticatedRoutes";
import ResetPassword from "./containers/ResetPassword";
import Settings2 from "./containers/Settings2";
import ChangePassword from "./containers/ChangePassword";
import ChangeEmail from "./containers/ChangeEmail";


export default function Routes({ appProps }) {
  return (
    <Switch>
      <AppliedRoute path="/" exact component={Home} appProps={appProps} />
      <UnauthenticatedRoute
          path="/login/reset"
          exact
          component={ResetPassword}
          appProps={appProps}
/>
      <AuthenticatedRoute
        path="/settings2"
        exact
        component={Settings2}
        appProps={appProps}
      />
      <AuthenticatedRoute
        path="/settings/password"
        exact
        component={ChangePassword}
        appProps={appProps}
      />
      <AuthenticatedRoute
        path="/settings/email"
        exact
        component={ChangeEmail}
        appProps={appProps}
        />
      <UnauthenticatedRoute path="/login" exact component={Login} appProps={appProps} />
      <UnauthenticatedRoute path="/signup" exact component={Signup} appProps={appProps} />
      <AuthenticatedRoute path="/settings" exact component={Settings} appProps={appProps} />
      <AuthenticatedRoute path="/notes/new" exact component={NewNote} appProps={appProps} />
      <AuthenticatedRoute path="/notes/:id" exact component={Notes} appProps={appProps} />
      { /* Finally, catch all unmatched routes */ }
      <Route component={NotFound} />
    </Switch>
  );
}