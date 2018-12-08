import React, { Component } from "react";
import Header from "../../components/Header";
import UserList from "../../components/UserList";
import Map from "../../components/Map";
import Chat from "../../components/Chat";

class MainLayout extends Component {
  render() {
    return (
      <>
        <Header />
        <UserList />
        <Chat />
        <Map />
      </>
    );
  }
}

export default MainLayout;
