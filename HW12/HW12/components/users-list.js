import _ from "lodash";
import React from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from "./actions/users-list-actions";

export default class UsersList extends React.Component {
   
    render() {

    const { visibleUsers } = this.props.stateFromReducer;

     const userList = this;

        return (
              <ul>
                {visibleUsers.map(function(user) {
                   return <li key={user.id}><span className="list-item">{user.name}</span><button onClick={userList.deleteUser.bind(userList, user.id)}>Delete</button></li>;
                })}
              </ul>
        );
    }

    deleteUser(id) {
      this.props.deleteUser(id);
    }

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

function mapStateToProps(state) {
    return {
        stateFromReducer: state
    };
}
const UserList = connect(mapStateToProps, mapDispatchToProps)(UsersList);
export default UserList
