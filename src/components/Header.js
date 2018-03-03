import React, { Component } from "react";
import { Link } from "react-router-dom";
import decode from "jwt-decode";

export class Header extends Component {
  clearStorage = () => {
    localStorage.clear();
  };

  render() {
    let email = "";
    let uid = "";
    try {
      const token = localStorage.getItem("token");
      const { user } = decode(token);
      email = user.email;
      uid = user.id;
    } catch (err) {}
    return (
      <div className="navbar">
        <BecomeDogWalker />
        <table className="enter_site">
          <tbody>
            <tr>
              <td>
                <Link to={`/user/${uid}`}>
                  {email}
                </Link>
              </td>
              <td>
                {email
                  ? <td>
                      <Link
                        to="/"
                        onClick={this.clearStorage}
                        className="enter_text"
                      >
                        Logout
                      </Link>
                    </td>
                  : <Link to="/login" className="enter_text">
                      Login
                    </Link>}
              </td>
              <td>/</td>
              <td>
                <Link to="/register" className="enter_text">
                  Register
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
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
            <td>
              <Link to="dogwalker-register">Become a walker</Link>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}
