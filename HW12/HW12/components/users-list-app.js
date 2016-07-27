import React from 'react';
import CreateUser from './create-user';
import Filter from './users-list-filter';
import UsersList from './users-list';

export default class UsersListApp extends React.Component {
    render() {
        return (
            <div>
                <h1>BSA16 HW12</h1>
                <CreateUser/>
                <Filter/>
                <UsersList />
            </div>
        );
    }
}
