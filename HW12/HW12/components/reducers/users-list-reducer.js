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


export default function patentDetailsReducer(state = initialState, action) {
    
    switch (action.type) {

        case "USERS_FILTER": {

            const {filter} = action;

            console.log("new filter: " + filter);

            let visibleUsers = [];
            if (filter === "")
                visibleUsers = JSON.parse(JSON.stringify(state.users));
            else 
                {
                for (let i = 0; i < state.users.length; i++) {
                    console.log("name: " + state.users[i].name);
                    if (state.users[i].name.toUpperCase().indexOf(filter.toUpperCase()) === 0)
                        visibleUsers.push(state.users[i]);
                }
            }

             return Object.assign({}, state, {
                users: state.users,
                visibleUsers: visibleUsers,
                filter: filter
            })
        }
       
        case "USER_ADD": {

            const { name, nextId} = action;

            let users = JSON.parse(JSON.stringify(state.users));
            users.push({name: name, id:nextId});

            let visibleUsers = [];
            if (state.filter === "")
                visibleUsers = JSON.parse(JSON.stringify(users));
            else 
                {
                for (let i = 0; i < users.length; i++)
                    if (users[i].name.toUpperCase().indexOf(state.filter.toUpperCase()) === 0)
                        visibleUsers.push(users[i]);
            }
            

            return Object.assign({}, state, {
                users: users,
                visibleUsers: visibleUsers,
                filter: state.filter
            })
        }

        case "USER_DELETE": {

            const { id} = action;

            let users = JSON.parse(JSON.stringify(state.users));

            _.remove(users, user => user.id === id);

            let visibleUsers = [];
            if (state.filter === "")
                visibleUsers = JSON.parse(JSON.stringify(users));
            else 
                {
                for (let i = 0; i < users.length; i++)
                    if (users[i].name.toUpperCase().indexOf(state.filter.toUpperCase()) === 0)
                        visibleUsers.push(users[i]);
            }
            

             return Object.assign({}, state, {
                users: users,
                visibleUsers: visibleUsers,
                filter: state.filter
            })
        }

        default: {
            return state;        
        }
    }
}
