import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import './App.scss';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Header from './components/Header';
import {GoogleLoginResponse, GoogleLoginResponseOffline} from 'react-google-login';
import type {Parameters} from "./services/types/data.d";
import {Get} from 'react-axios';
import axios from 'axios';
import {ParameterDropdown} from "./services/openaq";

type State = {
}

type AxiosResponse = {
    config: Object;
    data: Parameters;
    headers: Object;
    request: any;
    status: number;
    statusText: string;
}

class App extends Component<null, State> {

    axiosInstance = axios.create({
        baseURL: 'https://api.openaq.org/v1',
        timeout: 2000
    });

    static onSuccess(response: GoogleLoginResponse | GoogleLoginResponseOffline): void {
        console.log(response);
    }

    static onFailure(error: any): void {
        console.log(error);
    }

    static onLogoutSuccess(): void {
        console.log('Logout');
    }

    render() {
        return <div>
            <Header
                clientID="850051073434-acdildh3k31d509tmtcag5f7g86h4mca.apps.googleusercontent.com"
                buttonName="Login"
                onSuccess={App.onSuccess}
                onFailure={App.onFailure}
                buttonClass="button is-primary"
                onLogoutSuccess={App.onLogoutSuccess}
            />
            <section className="hero ">
                <Route
                    exact={true}
                    path="/"
                    component={Home}
                />
                <Route
                    path="/dashboard"
                    component={Dashboard}
                />
                <Route
                    path="/profile"
                    component={Profile}
                />
            </section>
           <ParameterDropdown axios={this.axiosInstance}/>
        </div>
    }
}

export default App;
