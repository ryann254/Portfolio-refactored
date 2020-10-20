import React, { Component } from "react";
import Redirect from "react-router-dom/es/Redirect";
import SignInWidget from "./SigninWidget";
import { withOktaAuth } from "@okta/okta-react";

export default withOktaAuth(
  class Login extends Component {
    constructor(props) {
      super(props);
      this.onSuccess = this.onSuccess.bind(this);
      this.onError = this.onError.bind(this);
    }

    onSuccess(res) {
      if (res.status === "SUCCESS") {
        return this.props.authService.redirect({
          sessionToken: res.session.token,
        });
      }
    }

    onError(err) {
      console.log("error logging in", err);
    }

    render() {
      return this.props.authState.isAuthenticated ? (
        <Redirect to={{ pathname: "/" }} />
      ) : (
        <SignInWidget
          baseUrl={this.props.baseUrl}
          onSuccess={this.onSuccess}
          onError={this.onError}
        />
      );
    }
  }
);
