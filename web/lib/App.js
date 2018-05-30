import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.scss';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Header from './components/Header';
import { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';

class App extends Component {
    onSuccess(response) {
        console.log(response);
    }

    onFailure(error) {
        console.log(error);
    }

    static onLogoutSuccess() {
        console.log('Logout');
    }

    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(Header, {
                clientID: '850051073434-acdildh3k31d509tmtcag5f7g86h4mca.apps.googleusercontent.com',
                buttonName: 'Login',
                onSuccess: this.onSuccess,
                onFailure: this.onFailure,
                buttonClass: 'button is-primary',
                onLogoutSuccess: App.onLogoutSuccess
            }),
            React.createElement(
                'section',
                { className: 'hero ' },
                React.createElement(Route, {
                    exact: true,
                    path: '/',
                    component: Home
                }),
                React.createElement(Route, {
                    path: '/dashboard',
                    component: Dashboard
                }),
                React.createElement(Route, {
                    path: '/profile',
                    component: Profile
                })
            )
        );
    }
}

export default App;