import React, { Component } from "react";

import { graphql } from "react-apollo";
import gql from "graphql-tag";

import "../styles/styles.css";
import "../styles/desktop.css";

class RightTab extends Component {
  render() {
    const { userId, data: { loading, getUser = [] } } = this.props;

    return (
      <div className="righttab">
        <div />
        <ul>
          <li>this is the sidebar</li>
        </ul>
      </div>
    );
  }
}

const getUserMutation = gql`
  query($userId: Int!) {
    getUser(id: $userId) {
      id
      firstname
      lastname
      pets {
        id
        name
      }
    }
  }
`;

export default graphql(getUserMutation, {
  variables: props => ({
    id: props.userId
  })
})(RightTab);
