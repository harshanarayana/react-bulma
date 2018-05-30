// @flow

import React, { Component } from "react";
import { Table } from "react-bulma-components";
import { Object } from "core-js";
import TimeChart from "./widget/TimeChart";
import LoginServiceType from "../types/LoginServiceType";
import State from "../types/State";

class Widget extends Component<LoginServiceType, State> {
  constructor(props, context) {
    super(props);
    this.state = {
      propMap: {
        sub: "ID",
        given_name: "First Name",
        family_name: "Last Name",
        nickname: "Nickname",
        name: "Full Name",
        picture: "Picture",
        gender: "Gender",
        locale: "Locale",
        updated_at: "Last Updated"
      }
    };
  }

  componentDidMount() {
    this.props.auth.getUser();
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    let userData = JSON.parse(localStorage.getItem("profile"));
    if (userData && isAuthenticated()) {
      let keys = Object.keys(userData);
      return (
        <div>
          <Table width={window.innerHeight}>
            <thead>
              <tr>
                {keys.map(key => {
                  return <th>{this.state.propMap[key]}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              <tr>
                {keys.map(key => {
                  if (key === "picture") {
                    return (
                      <td>
                        <img src={userData[key]} alt="User" />
                      </td>
                    );
                  } else {
                    return <td>{userData[key]}</td>;
                  }
                })}
              </tr>
            </tbody>
          </Table>
          <h2>BTM Layout, Bengaluru - CPCB - CO Levels</h2>
          <TimeChart />
        </div>
      );
    } else {
      return <div />;
    }
  }
}

export default Widget;
