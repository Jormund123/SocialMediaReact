//creating the actions

export const LoginStart = (userCredentials) => ({
    type: "LOGIN_START",
});
export const LoginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user, //here the user credentials is then passed to reducer
});
export const LoginFailure = (error) => ({
    type: "LOGIN_FAILURE",
    payload: error,
});
