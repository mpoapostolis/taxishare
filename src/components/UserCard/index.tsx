import React, { Component } from "react";
import { userClassContainer, avatar } from "./css";
const src = `https://scontent.fath1-1.fna.fbcdn.net/v/t1.0-9/29541664_1285716934905065_8493007672906439520_n.jpg?_nc_cat=102&_nc_ht=scontent.fath1-1.fna&oh=545e463366dbf93fec414940b1e56398&oe=5CB1BD66`;

class UserCard extends Component {
  render() {
    return (
      <div className={userClassContainer}>
        <img className={avatar} src={src} alt=":)" />
        <h3>UserNme</h3>
      </div>
    );
  }
}
export default UserCard;
