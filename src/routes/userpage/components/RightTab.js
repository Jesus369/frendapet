import React from "react";

import "../styles/desktop.css";
import "../styles/styles.css";

// const green = {
//   color: "rgba(24, 148, 61, 0.774)",
//   paddingRight: ".5em"
// };

// const Bubble = ({ on = true }) => (on ? <span style={green}>●</span> : "○");

const RightTab = ({ walkers, pets = [], owner, userId }) => {
  console.log(pets);
  return (
    <div className="right_tab">
      <div className="walkers_container">
        <div className="category">Walkers</div>
        <div className="walkers_listings" />
      </div>
      <div className="border" />
      <div className="pets_container" />
    </div>
  );
};

export default RightTab;
