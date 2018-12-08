import React, { Component } from "react";
import Header from "../../components/Header";
import UserList from "../../components/UserList";
import Map from "../../components/Map";
import Chat from "../../components/Chat";
import { layoutContainer } from "./css";

class MainLayout extends Component {
  render() {
    return (
      <div className={layoutContainer}>
        <Header />
        <UserList />
        <Chat />
        <Map />
      </div>
    );
  }
}

export default MainLayout;
