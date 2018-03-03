import React, { Component } from "react";

/* Components */
import { Header } from "../components/Header";
import HomeRegister from "../components/HomeRegister";
import { SalesPitch } from "../components/HomeRegister";

export class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="section_one">
          <SalesPitch />
          <HomeRegister />
        </div>
      </div>
    );
  }
}
