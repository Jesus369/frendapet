import React from "react";
import { Link } from "react-router-dom";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

import { Image, List } from "semantic-ui-react";

const SearchResultsContainer = ({ data: { allWalkers = [] } }) =>
  <div>
    <List animated verticalAlign="middle">
      {allWalkers.map(walker =>
        <List.Item>
          <Image
            avatar
            style={{ width: "4em", height: "4em" }}
            src="data:image/jpeg;base64,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"
          />
          <List.Content>
            <List.Header style={{ fontSize: "1em" }}>
              <Link to={`walker/${walker.id}`}>
                {walker.signature}
              </Link>
            </List.Header>
          </List.Content>
        </List.Item>
      )}
    </List>
  </div>;

const allWalkersQuery = gql`
  {
    allWalkers {
      id
      signature
    }
  }
`;

export default graphql(allWalkersQuery)(SearchResultsContainer);
