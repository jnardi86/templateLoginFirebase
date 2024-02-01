export const authInitialState = {
    isLoggedIn: false,
};

// EJEMPLO CON LOCAL STORAGE. EN NUESTRO CASO HAY QUE VER COMO ES CON FIREBASE

export const AUTH_KEY_LOCAL_STORAGE = "auth"

export const authInitializer = (initialValue = authInitialState) => JSON.parse(localStorage.getItem(AUTH_KEY_LOCAL_STORAGE)) || initialValue;

export const AUTH_TYPES = {
    LOGIN: "LOGIN",
    LOGOUT: "LOGOUT",
};

export const authReducer = (
    state = authInitialState,
    { type: authType, payload }
) => {
    switch (authType) {
        case AUTH_TYPES.LOGIN:
            return {
                ...state,
                isLoggedIn: true,
            }
        case AUTH_TYPES.LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
            }
        default:
            return state;
    }
}