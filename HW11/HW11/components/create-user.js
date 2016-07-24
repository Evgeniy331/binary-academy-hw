import React from 'react';

export default class UserList extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form onSubmit={this.handleCreate.bind(this)}>
                <input type="text" placeholder="User name" ref="createInput" />
                <button>Create</button>
            </form>
        );
    }

    handleCreate(event) {
        event.preventDefault();

        const createInput = this.refs.createInput;
        const userName = createInput.value;

        if (userName === "")
            return;

        this.props.createUser(userName);
        this.refs.createInput.value = "";
    }
}
