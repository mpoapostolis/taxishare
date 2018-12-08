import React, { Component } from "react";
import { userListContainer } from "./css";

class UserList extends Component {
  render() {
    return (
      <div className={userListContainer}>
        <h1>UserList</h1>
      </div>
    );
  }
}

export default UserList;
