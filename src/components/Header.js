import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <div className="navbar">
        <table className="enter_site">
          <tbody>
            <tr>
              <td className="enter_text">Signin</td>
              <td>/</td>
              <td className="enter_text">Signup</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
