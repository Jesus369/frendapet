import React, { Component } from "react";

/* Components */
import { Header } from "../components/Header";
import HomeRegister from "../components/HomeRegister";
import { SectionOne } from "../components/SectionOne";

export class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <HomeRegister />
        <SectionOne />
      </div>
    );
  }
}
