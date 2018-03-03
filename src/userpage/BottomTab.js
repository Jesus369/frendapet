import React, { Component } from "react";
import "./styles/desktop.css";
import "./styles/styles.css";

const green = {
  color: "rgba(24, 148, 61, 0.774)",
  paddingRight: ".5em"
};

const Bubble = ({ on = true }) => (on ? <span style={green}>●</span> : "○");

const pet = ({ name, id }) =>
  <li className="this_pet" key={`user-${id}`}>
    {name}
  </li>;

const walker = ({ name, id }) =>
  <li key={`walker-${id}`} className="this_walker">
    <Bubble />
    {name}
  </li>;

const BottomTab = ({ walkers, pets }) => {
  return (
    <div className="bottomtab">
      <div className="walkers_container">
        {walkers.map(walker)}
      </div>
      <div className="border" />
      <div className="pets_container">
        {pets.map(pet)}
      </div>
    </div>
  );
};

export default BottomTab;
