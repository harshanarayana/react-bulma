// @flow

import React, { Component } from 'react';
import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline
} from 'react-google-login';

type Props = {
  clientID: string;
  buttonName: string;
  onSuccess: (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => void;
  onFailure: (error: any) => void;
  buttonClass: string;
};

type State = {};
export default class Login extends Component<Props, State> {
  render() {
    return (
      <GoogleLogin
        clientId={this.props.clientID}
        buttonText={this.props.buttonName}
        onSuccess={this.props.onSuccess}
        onFailure={this.props.onFailure}
        className={this.props.buttonClass}
      />
    );
  }
}
