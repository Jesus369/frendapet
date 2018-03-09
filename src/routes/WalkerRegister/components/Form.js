import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

// Components

class Form extends Component {
  state = {
    signature: ""
  };

  onChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  preventRefresh = e => {
    e.preventDefault();
  };

  registerWalker = async () => {
    const { signature } = this.state;
    const response = await this.props.mutate({
      variables: { signature }
    });
    console.log(response);
  };

  render() {
    const { signature } = this.state;

    return (
      <div className="walker_signup">
        <form onChange={this.onChange} onSubmit={this.preventRefresh}>
          <input name="signature" value={signature} placeholder="Sign" />
          <button onClick={this.registerWalker}>Register</button>
        </form>
      </div>
    );
  }
}

const registerWalkerMutation = gql`
  mutation($signature: String!) {
    registerWalker(signature: $signature) {
      ok
    }
  }
`;

export default graphql(registerWalkerMutation)(Form);
