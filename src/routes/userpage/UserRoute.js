import React, { Component } from "react";
import decode from "jwt-decode";
import PropTypes from "prop-types";

import RightTab from "./components/RightTab";
import BottomTab from "./components/BottomTab";

import { graphql } from "react-apollo";
import gql from "graphql-tag";

const UserRoute = ({ user }) => {
  console.log(user.firstname);
  let userId = "";
  let email = "";
  try {
    const token = localStorage.getItem("token");
    const { user } = decode(token);
    userId = parseInt(user.id, 10);
    email = user.email;
  } catch (err) {}
  return (
    <div>
      {user.firstname}
      <RightTab email={email} userId={userId} />
      <BottomTab owner={userId} pets={user.pets} />
    </div>
  );
};

UserRoute.propTypes = {
  user: PropTypes.object
};

UserRoute.defaultProps = {
  user: {}
};

const getUserQuery = gql`
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

export default graphql(getUserQuery, {
  options: ({ match }) => ({ variables: { id: match.params.id } }),
  props: ({ data: { getUser } }) => ({
    user: getUser
  })
})(UserRoute);
