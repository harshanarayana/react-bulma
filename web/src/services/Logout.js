// @flow

import React, { Component } from 'react';
import {
  GoogleLogout
} from 'react-google-login';

type State = {};

type Props = {
    buttonName: string;
    onLogoutSuccess: () => void;
    buttonClass: string;
};

export default class Logout extends Component<Props, State> {

    render() {
        return(
            <GoogleLogout
                buttonText={this.props.buttonName}
                onLogoutSuccess={this.props.onLogoutSuccess}
                className={this.props.buttonClass}
            />
        );
    }
}