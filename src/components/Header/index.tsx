import React, { Component } from "react";
import { headerContainer } from "./css";

class Header extends Component {
  render() {
    return (
      <header className={headerContainer}>
        <input type="text" />
        <h1>Header</h1>
      </header>
    );
  }
}

export default Header;
