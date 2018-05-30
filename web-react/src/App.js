import React, { Component } from "react";
import "./App.css";
import Layout from "./app/Layout";
import LoginServiceType from "./types/LoginServiceType";

class App extends Component<LoginServiceType> {
    constructor(props, context) {
        super(props, context);
    }

    goTo(route) {
        this.props.history.replace(`/${route}`);
    }

    login() {
        this.props.auth.login();
    }

    logout() {
        this.props.auth.logout();
    }

    render() {
        return (
            <div>
                <Layout
                    auth={this.props.auth}
                    goTo={this.goTo}
                    login={this.login}
                    logout={this.logout}
                />
            </div>
        );
    }
}

export default App;
