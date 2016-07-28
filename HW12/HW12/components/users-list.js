import _ from "lodash";
import React from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import UsersListItem from "./users-list-item";
import * as actions from "./actions/users-list-actions";

export default class UsersList extends React.Component {
   
    render() {

    const { visibleUsers } = this.props.stateFromReducer;

        return (
              <ul>
                {visibleUsers.map(function(user) {
                    return <UsersListItem key={user.id} user={user} />;
                })}
              </ul>
        );
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
