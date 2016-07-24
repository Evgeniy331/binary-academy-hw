import React from 'react';
import CreateUser from './create-user';
import UsersList from './users-list';

const users = [
{
    name: "MyUser1",
    id: 0
},
{
    name: "MyUser2",
    id: 1
}
];

let lastId = 1; 

export default class UsersListApp extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            users
        };

    }

    render() {
        const users = this.state;
        return (
            <div>
                <h1>BSA16 HW11</h1>
                <CreateUser users={this.state.users} createUser={this.createUser.bind(this)} />
                <UsersList
                    users={this.state.users}
                    deleteUser={this.deleteUser.bind(this)}
                />
            </div>
        );
    }

    shouldComponentUpdate(nextProps, nextState) {

        if (this.state.users.length !== nextState.length) 
            return true;

        for (let i = 0; i < this.state.users.length; i++) {

            if (this.state.users[i].name !== nextState.users[i].name)
                return true;

            if (this.state.users[i].id !== nextState.users[i].id)
                return true;
        }

        return false;
    }

    createUser(userName) {

        ++lastId;

        let newState = JSON.parse(JSON.stringify(this.state.users));
        newState.push({name: userName, id: lastId});
        this.setState({ users: newState });
    }


    deleteUser(idUserToDelete) {
        let newState = JSON.parse(JSON.stringify(this.state.users));
        _.remove(newState, user => user.id === idUserToDelete);
        this.setState({ users: newState});
    }
}
