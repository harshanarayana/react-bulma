// @flow

import React, { Component } from "react";
import Header from "./layout/Header";
import Widget from "../dashboard/Widget";
import LoginServiceType from "../types/LoginServiceType";

class Layout extends Component<LoginServiceType> {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                <Header
                    auth={this.props.auth}
                    goTo={this.props.goTo}
                    login={this.props.login}
                    logout={this.props.logout}
                />
            </div>
        );
    }
}

export default Layout;
