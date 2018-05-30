import React, { Component } from "react";
import { Navbar } from "react-bulma-components";
import LoginServiceType from "../../types/LoginServiceType";

class Header extends Component<LoginServiceType> {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div>
        <Navbar>
          <Navbar.Brand>
            <Navbar.Item href="/home">
              <img
                src="https://rawgit.com/gorangajic/react-icons/master/react-icons.svg"
                alt="NTS - Interview - Demo Application"
                width="112"
                height="28"
              />
            </Navbar.Item>
            <Navbar.Burger />
          </Navbar.Brand>
          <Navbar.Menu>
            {isAuthenticated() && (
              <Navbar.Container>
                <Navbar.Item href="/dashboard">Dashboard</Navbar.Item>
                <Navbar.Item href="/profile">Profile</Navbar.Item>
              </Navbar.Container>
            )}
            <Navbar.Container position="end">
              <Navbar.Item dropdown hoverable>
                <Navbar.Link>
                  <img
                    alt="user"
                    src="https://cdn2.iconfinder.com/data/icons/rcons-user/32/male-circle-512.png"
                  />
                </Navbar.Link>
                <Navbar.Dropdown right boxed>
                  {!isAuthenticated() && (
                    <Navbar.Item href="#">
                      <a onClick={this.props.login.bind(this)}>Log In</a>
                    </Navbar.Item>
                  )}
                  {isAuthenticated() && (
                    <Navbar.Container>
                      <Navbar.Item href="/profile">Profile</Navbar.Item>
                      <Navbar.Item
                        href="/"
                        onClick={this.props.logout.bind(this)}
                      >
                        Logout
                      </Navbar.Item>
                    </Navbar.Container>
                  )}
                </Navbar.Dropdown>
              </Navbar.Item>
            </Navbar.Container>
          </Navbar.Menu>
        </Navbar>
      </div>
    );
  }
}

export default Header;
