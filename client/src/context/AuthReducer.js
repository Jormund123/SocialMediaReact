const AuthReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_START":
            return {
                user: null,
                isFetching: true,
                error: false,
            };
        case "LOGIN_SUCCESS":
            return {
                user: action.payload, //here the user's credentials are sent
                isFetching: false,
                error: false,
            };
        case "LOGIN_FAILURE":
            return {
                user: null,
                isFetching: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default AuthReducer;
