import React, { Component } from "react";
import { userListContainer, userList } from "./css";
import UserCard from "../UserCard";
import I18n from "../../I18n";

const ar: Array<any> = [...Array(30)].map(e => e);

class UserList extends Component {
  render() {
    return (
      <I18n.Consumer>
        {t => (
          <div className={userListContainer}>
            <h1>{t("users")}</h1>
            <div className={userList}>
              {ar.map((e, key) => (
                <UserCard key={key} />
              ))}
            </div>
          </div>
        )}
      </I18n.Consumer>
    );
  }
}

export default UserList;
