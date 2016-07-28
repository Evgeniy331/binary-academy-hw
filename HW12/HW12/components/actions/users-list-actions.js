let nextId = 1

export function addUser(name) {
    ++nextId;
    const action = {
        type: "USER_ADD",
        nextId,
        name
    };
    return action;
}

export function deleteUser(id) {
    const action = {
        type: "USER_DELETE",
        id
    };
    return action;
}

export function filter(filter) {
    const action = {
        type: "USERS_FILTER",
        filter
    };
    return action;
}