import React, { Component } from "react";

/* Components */
import Header from "../../components/Header";
import HomeScreen from "./components/HomeScreen";
import HomeRegister from "./components/HomeRegister";
import HomeWalkerSearch from "./components/HomeWalkerSearch";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <HomeScreen />
        <div className="section_one">
          <HomeRegister />
        </div>
        <HomeWalkerSearch />
      </div>
    );
  }
}

export default Home;
