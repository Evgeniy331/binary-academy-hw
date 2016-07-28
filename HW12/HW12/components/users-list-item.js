import React from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from "./actions/users-list-actions";

export default class UserItem extends React.Component {

    render() {

        return (
              <li><span className="list-item">{this.props.user.name}</span><button onClick={this.deleteUser.bind(this, this.props.user.id)}>Delete</button></li>
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
const User = connect(mapStateToProps, mapDispatchToProps)(UserItem);
export default User