import React, { Component } from "react";
import HomeWalkerSearch from "../components/HomeWalkerSearch";

class HomeScreen extends Component {
  render() {
    return (
      <div className="homescreen_img_container">
        <img
          className="homescreen_img"
          alt="The dogs leashed by a walker"
          src={require("../../../pageImages/dogs1.png")}
        />
        <HomeWalkerSearch />
      </div>
    );
  }
}

export default HomeScreen;
