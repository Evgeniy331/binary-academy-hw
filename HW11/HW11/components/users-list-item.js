import React from 'react';

export default class UsersListItem extends React.Component {

    render() {
        return (
                 <li><span className="list-item">{this.props.user.name}</span><button onClick={this.props.deleteUser.bind(this, this.props.user.id)}>Delete</button></li>
        );
    }
}
