import React, { Component } from "react";

class SectionOne extends Component {
  render() {
    return (
      <div className="walker_signup_intro">
        <div className="punchline_container">
          <ReasonOne />
          <ReasonTwo />
          <ReasonThree />
        </div>
      </div>
    );
  }
}

class ReasonOne extends Component {
  render() {
    return (
      <div className="punchline_div">
        <p className="punchline">Work your own hours!</p>
      </div>
    );
  }
}

class ReasonTwo extends Component {
  render() {
    return (
      <div className="punchline_div">
        <p className="punchline">Choose your areas to service!</p>
      </div>
    );
  }
}

class ReasonThree extends Component {
  render() {
    return (
      <div className="punchline_div">
        <p className="punchline">Incorporate your own team of pet techs!</p>
      </div>
    );
  }
}

export default SectionOne;
