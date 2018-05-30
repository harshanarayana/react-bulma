import React, { Component } from 'react';
import { Navbar, NavbarItem } from 'bloomer';
import { NavbarMenu } from 'bloomer/lib/components/Navbar/NavbarMenu';
import { NavbarStart } from 'bloomer/lib/components/Navbar/NavbarStart';
import { NavbarEnd } from 'bloomer/lib/components/Navbar/NavbarEnd';
import Login from '../services/Login';
import Logout from '../services/Logout';
import '@fortawesome/react-fontawesome';
import { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';

export default class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userLoggedIn: false
        };
    }

    loginSuccessful(response) {
        if (response.isSignedIn()) {
            this.setState({
                userLoggedIn: true
            });
        }
    }

    loginFailed(error) {
        this.setState({
            userLoggedIn: false
        });
    }

    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                Navbar,
                {
                    className: 'navbar has-shadow is-spaced'
                },
                React.createElement(
                    NavbarMenu,
                    null,
                    React.createElement(
                        NavbarStart,
                        null,
                        React.createElement(
                            NavbarItem,
                            {
                                href: '/',
                                className: 'is-active'
                            },
                            'Home'
                        ),
                        React.createElement(
                            NavbarItem,
                            {
                                href: '/dashboard'
                            },
                            'Dashboard'
                        ),
                        React.createElement(
                            NavbarItem,
                            {
                                href: '/profile'
                            },
                            'Profile'
                        )
                    ),
                    React.createElement(
                        NavbarEnd,
                        null,
                        React.createElement(
                            NavbarItem,
                            null,
                            React.createElement(Login, {
                                clientID: this.props.clientID,
                                buttonName: this.props.buttonName,
                                onSuccess: this.props.onSuccess,
                                onFailure: this.props.onFailure,
                                buttonClass: this.props.buttonClass
                            })
                        ),
                        React.createElement(
                            NavbarItem,
                            null,
                            React.createElement(Logout, {
                                buttonName: 'Logout',
                                buttonClass: 'button warning',
                                onLogoutSuccess: this.props.onLogoutSuccess
                            })
                        )
                    )
                )
            )
        );
    }
}