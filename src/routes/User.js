import React, { Component } from "react";

class User extends Component {
  render() {
    return (
      <div>
        <div>
          {this.props.user.firstname}
        </div>
      </div>
    );
  }
}

export default User;
