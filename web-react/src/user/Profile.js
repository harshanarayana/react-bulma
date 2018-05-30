import React, { Component } from 'react';
import { Form, Text, NestedField } from 'react-form';
import LoginServiceType from "../types/LoginServiceType";
import State from "../types/State";

const Friend = () => (
  <div>
    <h2>Friend</h2>
    <label>
      First name <Text field="firstName" />
    </label>
    <label>
      Last name <Text field="lastName" />
    </label>
  </div>
)

export default class Profile extends Component<LoginServiceType, State> {
  constructor(props) {
    super(props);
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div>
        {
          !isAuthenticated() && (
            <Form onSubmit={submittedValues => this.setState({ submittedValues })}>
              {formApi => (
                <form onSubmit={formApi.submitForm} id="form3">
                  <NestedField field={['friends', 0]} component={Friend} />
                  <NestedField field={['friends', 1]} component={Friend} />
                  <NestedField field={['friends', 2]} component={Friend} />
                  <button type="submit" className="mb-4 btn btn-primary">
                    Submit
              </button>
                </form>
              )}
            </Form>
          )
        }
      </div>
    );
  }
}

