import React, { Component } from 'react';
import { GoogleLogout } from 'react-google-login';

export default class Logout extends Component {

    render() {
        return React.createElement(GoogleLogout, {
            buttonText: this.props.buttonName,
            onLogoutSuccess: this.props.onLogoutSuccess,
            className: this.props.buttonClass
        });
    }
}