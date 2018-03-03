import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import RightTab from "../userpage/RightTab";
import BottomTab from "../userpage/BottomTab";

class UserRoute extends Component {
  render() {
    return (
      <div>
        <RightTab />
        <BottomTab
          walkers={[
            { name: "Jon", id: 1 },
            { name: "Mary", id: 2 },
            { name: "Michel", id: 3 },
            { name: "Mark", id: 4 },
            { name: "Cynthia", id: 5 },
            { name: "Karen", id: 6 },
            { name: "Joe", id: 7 },
            { name: "Brett", id: 8 },
            { name: "Nydia", id: 9 },
            { name: "Kelly", id: 10 }
          ]}
          pets={[
            { name: "Ginger", id: 1 },
            { name: "Marco", id: 2 },
            { name: "Sweets", id: 3 },
            { name: "Chloe", id: 4 },
            { name: "Chubs", id: 5 }
          ]}
        />
      </div>
    );
  }
}

const getUserMutation = gql`
  {
    getUser(id: 1) {
      id
      firstname
      lastname
      email
    }
  }
`;

export default graphql(getUserMutation)(UserRoute);
