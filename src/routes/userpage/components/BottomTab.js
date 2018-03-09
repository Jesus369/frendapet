import React from "react";

import gql from "graphql-tag";
import { graphql } from "react-apollo";

import "../styles/desktop.css";
import "../styles/styles.css";

// const green = {
//   color: "rgba(24, 148, 61, 0.774)",
//   paddingRight: ".5em"
// };

// const Bubble = ({ on = true }) => (on ? <span style={green}>●</span> : "○");

const BottomTab = ({ walkers, owner, pets }) => {
  return (
    <div className="bottomtab">
      <div className="walkers_container">
        <div className="category">Walkers</div>
        <div className="walkers_listings" />
      </div>
      <div className="border" />
      <div className="pets_container">
        <div className="category">
          Pets + {owner}
        </div>
        <div className="pets_listings" />
      </div>
    </div>
  );
};

export default BottomTab;
