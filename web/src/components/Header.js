// @flow

import React, {Component} from 'react';
import {Navbar, NavbarItem} from 'bloomer';
import {NavbarMenu} from 'bloomer/lib/components/Navbar/NavbarMenu';
import {NavbarStart} from 'bloomer/lib/components/Navbar/NavbarStart';
import {NavbarEnd} from 'bloomer/lib/components/Navbar/NavbarEnd';
import Login from '../services/Login';
import Logout from '../services/Logout';
import '@fortawesome/react-fontawesome';
import {GoogleLoginResponse, GoogleLoginResponseOffline} from 'react-google-login';

type State = {
    selectedItem?: string;
    userLoggedIn: boolean;
};

type Props = {
    clientID: string;
    buttonName: string;
    onSuccess: (response: GoogleLoginResponse | GoogleLoginResponseOffline) => void;
    onFailure: (error: any) => void;
    onLogoutSuccess: () => void;
    buttonClass: string;
};

export default class Header extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            userLoggedIn: false
        };
    }

    loginSuccessful(response: GoogleLoginResponse | GoogleLoginResponseOffline): void {
        if (response.isSignedIn()) {
            this.setState({
                userLoggedIn: true
            });
        }
    }

    loginFailed(error: any): void {
        this.setState({
            userLoggedIn: false
        })
    }

    render() {
        return (
            <div>
                <Navbar
                    className="navbar has-shadow is-spaced"
                >
                    <NavbarMenu>
                        <NavbarStart>
                            <NavbarItem
                                href="/"
                                className="is-active"
                            >
                                Home
                            </NavbarItem>
                            <NavbarItem
                                href="/dashboard"
                            >
                                Dashboard
                            </NavbarItem>
                            <NavbarItem
                                href="/profile"
                            >
                                Profile
                            </NavbarItem>
                        </NavbarStart>
                        <NavbarEnd>
                            <NavbarItem>
                                <Login
                                    clientID={this.props.clientID}
                                    buttonName={this.props.buttonName}
                                    onSuccess={this.props.onSuccess}
                                    onFailure={this.props.onFailure}
                                    buttonClass={this.props.buttonClass}
                                />
                            </NavbarItem>
                            <NavbarItem>
                                <Logout
                                    buttonName="Logout"
                                    buttonClass="button warning"
                                    onLogoutSuccess={this.props.onLogoutSuccess}
                                />
                            </NavbarItem>
                        </NavbarEnd>
                    </NavbarMenu>
                </Navbar>
            </div>
        );
    }
}
