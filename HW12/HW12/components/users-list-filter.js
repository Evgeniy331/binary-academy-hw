import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from "./actions/users-list-actions";

export default class Filter extends React.Component {

    render() {
        return (
            <form onSubmit={this.filterUsers.bind(this)}>
                <input name="filter" type="text" placeholder="User name" ref="filterInput" />
                <button>Filter</button>
            </form>
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