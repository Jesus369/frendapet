import React, { Component } from "react";
import { Link } from "react-router-dom";
import decode from "jwt-decode";

import "./styles/styles.css";
import "./styles/desktop.css";
import "./styles/monitor.css";

// Components
import Login from "./Login";

class Header extends Component {
  clearStorage = () => {
    localStorage.clear();
  };

  render() {
    let email = "";
    let userId = "";
    try {
      const token = localStorage.getItem("token");
      const { user } = decode(token);
      email = user.email;
      userId = user.id;
    } catch (err) {}
    return (
      <div className="navbar">
        <table className="enter_site">
          <tbody>
            {email
              ? <tr>
                  <td>
                    <Link to={`/user/${userId}`}>
                      {email}
                    </Link>
                  </td>
                  <td>
                    <Link
                      to="/"
                      onClick={this.clearStorage}
                      className="enter_text"
                    >
                      Logout
                    </Link>
                  </td>
                </tr>
              : <tr>
                  <Login />
                  <td style={{ color: "white" }}>|</td>
                  <td>
                    <Link to="/register" className="enter_text">
                      Register
                    </Link>
                  </td>
                </tr>}
          </tbody>
        </table>
        <BecomeDogWalker />
      </div>
    );
  }
}

class BecomeDogWalker extends Component {
  render() {
    return (
      <table>
        <tbody>
          <tr>
            <td className="route_cat">
              <Link to="/" className="enter_text">
                Home
              </Link>
            </td>
            <td className="route_cat">
              <Link to="dogwalker-register" className="enter_text">
                Employment
              </Link>
            </td>
            <td className="route_cat">
              <Link to="/search-walker" className="enter_text">
                Search
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Header;
