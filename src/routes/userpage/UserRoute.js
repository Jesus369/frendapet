import React, { Component } from "react";
import decode from "jwt-decode";

import RightTab from "./components/RightTab";
import BottomTab from "./components/BottomTab";

import { graphql } from "react-apollo";
import gql from "graphql-tag";

class UserRoute extends Component {
  render() {
    const { data: { getUser = [] } } = this.props;
    let userId = "";
    let email = "";
    let pets = [];
    console.log(getUser.pets);

    try {
      const token = localStorage.getItem("token");
      const { user } = decode(token);
      userId = parseInt(user.id, 10);
      email = user.email;
    } catch (err) {}
    return (
      <div>
        {getUser.pets.map(pet =>
          <div>
            {pet.name}
          </div>
        )}
        <RightTab email={email} userId={userId} />
        <BottomTab owner={userId} />
      </div>
    );
  }
}

const getUserMutation = gql`
  query GET_USER($id: Int!) {
    getUser(id: $id) {
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
  options: ({ match }) => ({ variables: { id: match.params.id } })
})(UserRoute);
