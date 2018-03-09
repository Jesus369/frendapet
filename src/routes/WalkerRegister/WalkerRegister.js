import React, { Component } from "react";

// Styles CSS
import "./styles/styles.css";
import "./styles/desktop.css";

// Components
import Header from "../../components/Header";
import Form from "./components/Form";
import SectionOne from "./components/SectionOne";

class WalkerRegister extends Component {
  render() {
    return (
      <div>
        <Header />
        <SectionOne />
        <Form />
      </div>
    );
  }
}

export default WalkerRegister;
