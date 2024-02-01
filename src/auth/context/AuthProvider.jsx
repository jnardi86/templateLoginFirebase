import { useReducer } from "react";
import { AuthContext } from "./AuthContext"
import { AUTH_TYPES, authInitialState, authInitializer, authReducer } from "../reducer/authReducer";


const AuthProvider = ({ children }) => {

    const [authState, dispatch] = useReducer(
        authReducer,
        authInitialState,
        authInitializer
        )

    const login = () => {
        dispatch({
            type: AUTH_TYPES.LOGIN,
        });
    };
    const logout = () => {
        dispatch({
            type: AUTH_TYPES.LOGOUT,
        })
    };

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: authState.isLoggedIn,
                login,
                logout
            }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider