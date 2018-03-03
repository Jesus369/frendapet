import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

class HomeRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: ""
    };
  }

  onChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
    console.log(this.state);
  };

  preventRefresh = e => {
    e.preventDefault();
  };

  submitRegistry = async () => {
    const { firstname, lastname, email, password } = this.state;
    const response = await this.props.mutate({
      variables: { firstname, lastname, email, password }
    });

    const { ok } = response.data.register;
    if (ok) {
      console.log(response);
    } else {
      return false;
    }
  };

  render() {
    const { firstname, lastname, email, password } = this.state;

    return (
      <div>
        <div className="home_reg_border">
          <form
            className="home_register"
            onChange={this.onChange}
            onSubmit={this.preventRefresh}
          >
            <input
              placeholder="First Name"
              className="form_input"
              name="firstname"
              value={firstname}
            />
            <input
              placeholder="Last Name"
              className="form_input"
              name="lastname"
              value={lastname}
            />
            <input
              placeholder="Email"
              className="form_input"
              name="email"
              value={email}
            />
            <input
              placeholder="Password"
              className="form_input"
              name="password"
              value={password}
            />
            <button onClick={this.submitRegistry} className="submit_form">
              Register
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export class SalesPitch extends Component {
  render() {
    return (
      <div className="sales_pitch">
        <li>Test</li>
        <li>Test</li>
        <li>Test</li>
        <li>Test</li>
        <li>Test</li>
      </div>
    );
  }
}

const registerMutation = gql`
  mutation(
    $firstname: String!
    $lastname: String!
    $email: String!
    $password: String!
  ) {
    register(
      firstname: $firstname
      lastname: $lastname
      email: $email
      password: $password
    ) {
      ok
    }
  }
`;

export default graphql(registerMutation)(HomeRegister);
