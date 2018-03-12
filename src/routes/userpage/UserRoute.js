import React from "react";
import decode from "jwt-decode";
import PropTypes from "prop-types";

import Center from "./components/Center";
import LeftTab from "./components/LeftTab";
import RightTab from "./components/RightTab";

import { graphql } from "react-apollo";
import gql from "graphql-tag";

const UserRoute = ({ user }) => {
  let userId = "";
  try {
    const token = localStorage.getItem("token");
    const { user } = decode(token);
    userId = parseInt(user.id, 10);
  } catch (err) {}
  return (
    <div className="userpage_contains">
      <LeftTab userId={userId} />
      <Center pets={user.pets} userId={user.id} />
      <RightTab owner={userId} pets={user.pets} />
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
        image
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
