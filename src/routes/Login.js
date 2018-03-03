import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  onChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    console.log(this.state);
  };

  preventRefresh = e => {
    e.preventDefault();
  };

  login = async () => {
    const { email, password } = this.state;
    const response = await this.props.mutate({
      variables: { email, password }
    });
    const { ok, token, refreshToken } = response.data.login;
    if (ok) {
      localStorage.setItem("token", token);
      localStorage.setItem("refreshToken", refreshToken);
      this.props.history.push("/");
    } else {
      return false;
    }
  };

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <form onSubmit={this.preventRefresh} onChange={this.onChange}>
          <input type="text" placeholder="Email" name="email" value={email} />
          <input
            type="text"
            placeholder="Password"
            name="password"
            value={password}
          />
          <button onClick={this.login}>
            <Link to="/">Signin</Link>
          </button>
        </form>
      </div>
    );
  }
}

const loginMutation = gql`
  mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      ok
      token
      refreshToken
    }
  }
`;

export default graphql(loginMutation)(Login);
