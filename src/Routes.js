import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { Security, LoginCallback, SecureRoute } from "@okta/okta-react";

//Own Components
import { RoutesWithLayout } from "./RoutesWithLayout";
import { Header, About, Work, Contact, AddEvents } from "./components";
import Homepage from "./components/Homepage";
import Login from "./auth/Login";

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
