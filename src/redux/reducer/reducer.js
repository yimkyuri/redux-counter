let initialState = {
    count:0,
    id:"ID",
    password:"Password",
    bold:""
}

function reducer(state=initialState, action) {
    switch (action.type) {
        case "INCREMENT":
            return {...state, count: state.count + action.payload.num };
        case "DECREMENT":
            return {...state, count: state.count - action.payload.num };
        case "LOGIN":
            return {...state, id:action.payload.id, password:action.payload.password, bold:action.payload.bold };
        default:
            return {...state };

    }
}

export default reducer