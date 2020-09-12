import React, { Component } from "react";
import ReactDOM from "react-dom";
import OktaSignIn from "@okta/okta-signin-widget";
import "@okta/okta-signin-widget/dist/css/okta-sign-in.min.css";

class SigninWidget extends Component {
  componentDidMount() {
    const el = ReactDOM.findDOMNode(this);
    this.widget = new OktaSignIn({
      baseUrl: this.props.baseUrl,
      logo: "images/Login-logo-2.png",
    });

    this.widget.renderEl({ el }, this.props.onSuccess, this.props.onError);
  }

  componentWillUnMount() {
    this.widget.remove();
  }

  render() {
    return <div />;
  }
}

export default SigninWidget;
