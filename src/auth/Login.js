import React, { Component } from "react";
import { Redirect } from "react-router-dom";
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

    componentDidMount() {
      console.log(this.props.authState, "authstate");
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
