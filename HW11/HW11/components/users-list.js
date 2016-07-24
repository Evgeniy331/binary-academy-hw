import _ from "lodash";
import React from "react";

import UsersListItem from "./users-list-item.js";

export default class UsersList extends React.Component {

    render() {

       const props = this.props;

        return (
              <ul>
                {this.props.users.map(function(user) {
                   return <UsersListItem key={user.id} user={user} deleteUser={props.deleteUser}/>;
                })}
              </ul>
        );
    }
}
