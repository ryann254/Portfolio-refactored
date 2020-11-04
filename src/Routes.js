import React, { Component, lazy } from "react";
import {Switch, Route, withRouter} from "react-router-dom";
import {LoginCallback, SecureRoute, Security} from "@okta/okta-react";

//Own Components
import { RoutesWithLayout } from "./RoutesWithLayout";
//React Lazy load
const Header = lazy(() => import("./components/Header"));
const Homepage = lazy(() => import("./components/Homepage"));
const About = lazy(() => import("./components/About"));
const Work = lazy(() => import("./components/Work"));
const Contact = lazy(() => import("./components/Contact"));
const AddEvents = lazy(() => import("./components/AddEvents"));
const Login = lazy(() => import("./auth/Login"));

const CALLBACK_PATH = "/implicit/callback";

export default withRouter(
  class Routes extends Component {
    constructor(props) {
      super(props);
      this.onAuthRequired = this.onAuthRequired.bind(this);
    }
    onAuthRequired() {
      this.props.history.push("/login");
    }

    render() {
      return (
        <Security
          issuer="https://dev-152996.okta.com/oauth2/default"
          clientId="0oax8eyax8UWAeILz4x6"
          redirectUri={window.location.origin + "/implicit/callback"}
          onAuthRequired={this.onAuthRequired}
        >
          <Switch>
            <Route path="/" exact>
              <Homepage />
            </Route>
            <RoutesWithLayout
              path="/about"
              exact
              layout={Header}
              component={About}
            />
            <RoutesWithLayout
              path="/work"
              exact
              layout={Header}
              component={Work}
            />

            <RoutesWithLayout
              path="/contact"
              exact
              layout={Header}
              component={Contact}
            />
            <SecureRoute
              path="/add-events"
              exact={true}
              component={AddEvents}
            />

            <Route
              path="/login"
              render={() => <Login baseUrl="https://dev-152996.okta.com" />}
            />
            <Route path={CALLBACK_PATH} component={LoginCallback} />
          </Switch>
        </Security>
      );
    }
  }
);
