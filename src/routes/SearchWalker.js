import React, { Component } from "react";
import { withApollo } from "react-apollo";
import gql from "graphql-tag";

class SearchWalker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      walkers: []
    };
  }
  render() {
    console.log(this.state);
    return (
      <div>
        Search Walker Page
        <input
          onChange={e => this.setState({ text: e.target.value })}
          placeholder="Search or a dog walker!"
        />
        <button
          onClick={() => {
            console.log("working");
          }}
        >
          Search
        </button>
      </div>
    );
  }
}

const Search = ({ data: { allUsers = [] } }) => {};

const allUsersMutation = gql`
  {
    allUsers(key: 0, limit: 10) {
      firstname
      lastname
      email
      password
    }
  }
`;

export default SearchWalker;
