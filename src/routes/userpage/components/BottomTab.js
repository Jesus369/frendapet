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

const BottomTab = ({ walkers, pets = [], owner }) => {
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
        {pets.map(pet =>
          <div>
            {pet.name}
          </div>
        )}
      </div>
    </div>
  );
};

export default BottomTab;
