import React, { Component } from 'react';
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';

export default class Login extends Component {
  render() {
    return React.createElement(GoogleLogin, {
      clientId: this.props.clientID,
      buttonText: this.props.buttonName,
      onSuccess: this.props.onSuccess,
      onFailure: this.props.onFailure,
      className: this.props.buttonClass
    });
  }
}