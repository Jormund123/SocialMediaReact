import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
    user: null, //because the user has not logged in
    isFetching: false,
    error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

//creating the wrapper which wraps the whole application
export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
    return (
        <AuthContext.Provider value={{ user: state.user, isFetching: state.isFetching, error: state.error, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};
