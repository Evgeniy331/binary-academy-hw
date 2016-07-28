const initialState = {
users: [
    {
        name: "MyUser1",
        id: 0
    },
    {
        name: "MyUser2",
        id: 1
    }
    ],
visibleUsers: [
    {
        name: "MyUser1",
        id: 0
    },
    {
        name: "MyUser2",
        id: 1
    }
    ],
filter: ""
};

function updateVisibleUsers(users, filter) {
    
    let visibleUsers = [];

    if (filter === "")
        visibleUsers = JSON.parse(JSON.stringify(users));
    else 
        {
        for (let i = 0; i < users.length; i++) {
            if (users[i].name.toUpperCase().indexOf(filter.toUpperCase()) === 0)
                visibleUsers.push(users[i]);
        }
    }

    return visibleUsers;
}


export default function patentDetailsReducer(state = initialState, action) {
    
    switch (action.type) {

        case "USERS_FILTER": {

            const {filter} = action;

             return Object.assign({}, state, {
                users: state.users,
                visibleUsers: updateVisibleUsers(state.users, filter),
                filter: filter,
                currUserInList: state.currUserInList
            })
        }
       
        case "USER_ADD": {

            const { name, nextId} = action;

            let users = JSON.parse(JSON.stringify(state.users));
            users.push({name: name, id:nextId});

            return Object.assign({}, state, {
                users: users,
                visibleUsers: updateVisibleUsers(users, state.filter),
                filter: state.filter,
                currUserInList: state.currUserInList
            })
        }

        case "USER_DELETE": {

            const { id} = action;

            let users = JSON.parse(JSON.stringify(state.users));
            _.remove(users, user => user.id === id);

             return Object.assign({}, state, {
                users: users,
                visibleUsers: updateVisibleUsers(users, state.filter),
                filter: state.filter,
                currUserInList: state.currUserInList
            })
        }

        default: {
            return state;        
        }
    }
}
