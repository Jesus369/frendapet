import React from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

const AllUsers = ({ data: { allUsers = [] } }) =>
  allUsers.map(user =>
    <h1 key={user.id}>
      <li>
        {user.email}
      </li>
      <li>
        {user.password}
      </li>
    </h1>
  );

const allUsersMutation = gql`
  {
    allUsers {
      firstname
      lastname
      email
      password
    }
  }
`;

export default graphql(allUsersMutation)(AllUsers);
