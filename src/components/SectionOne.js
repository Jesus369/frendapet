import React, { Component } from "react";

export class SectionOne extends Component {
  render() {
    return (
      <div>
        <div>
          <img
            className="portrait"
            alt="A group of dogs with their dog-walker"
            src={require("../pageImages/dogs1.png")}
          />
        </div>
        <div>This is an image</div>
      </div>
    );
  }
}
