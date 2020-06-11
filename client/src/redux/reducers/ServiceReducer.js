const initialState = {
    services: [],
    token: localStorage.getItem('token'),
    status: null
}

function ServiceReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_SERVICES":
            return {
                ...state,
                services: action.payload
            }
        case "ADD_SERVICE":
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                services: [...state.services, action.payload],
            }
        case "GET_STATUS":
            return {
                ...state,
                status: action.payload
            }
        default:
            return state;
    }
}

export default ServiceReducer;