import { createContext, useContext, useReducer } from 'react';

const UserStateContext = createContext();

const reducerDefaultState = {
    desktopIsLocked: true,
};

export const UserReducer = (state, action) => {
    switch (action.type) {
        case 'LOCK_DESKTOP':
            return {
                ...state,
                desktopIsLocked: true,
            };
        case 'UNLOCK_DESKTOP':
            return {
                ...state,
                desktopIsLocked: false,
            };

        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
};

export const useUserState = () => {
    const context = useContext(UserStateContext);

    if (context === undefined) {
        throw new Error('useUserState must be used within a UserProvider');
    }

    return context;
};

export const UserProvider = ({ children }) => {
    const [userState, dispatch] = useReducer(UserReducer, reducerDefaultState);

    return (
        <UserStateContext.Provider value={{ ...userState, dispatch }}>
            {children}
        </UserStateContext.Provider>
    );
};
