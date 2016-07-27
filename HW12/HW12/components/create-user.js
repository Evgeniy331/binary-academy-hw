import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from "./actions/users-list-actions";

export default class CreateUser extends React.Component {

    render() {
        return (
            <form onSubmit={this.addUser.bind(this)}>
                <input type="text" placeholder="User name" ref="createInput" />
                <button>Create</button>
            </form>
        );
    }

    addUser(event) {

        event.preventDefault();

        const createInput = this.refs.createInput;
        const userName = createInput.value;

        if (userName === "")
            return;

        this.props.addUser(userName);
        this.refs.createInput.value = "";

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
const UserList = connect(mapStateToProps, mapDispatchToProps)(CreateUser);
export default UserList
