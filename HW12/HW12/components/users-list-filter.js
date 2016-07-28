import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from "./actions/users-list-actions";

export default class Filter extends React.Component {

    render() {
        return (
            <input onKeyUp={this.filterUsers.bind(this)} name="filter" type="text" placeholder="Filter" ref="filterInput" />
        );
    }

    filterUsers(event) {

        event.preventDefault();

        const filterInput = this.refs.filterInput;
        const filter = filterInput.value;

        this.props.filter(filter);
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
const UserList = connect(mapStateToProps, mapDispatchToProps)(Filter);
export default UserList