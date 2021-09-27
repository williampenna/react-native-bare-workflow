import React, { createContext, useReducer } from 'react';
import users from '../data/users';

const initialState = { users };
const usersContext = createContext({})

export const UsersProvider = props => {

    function reducer(state, action) {
        console.warn(action);
        return state;
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <usersContext.Provider value={{ state, dispatch }}>
            {props.children}
        </usersContext.Provider>
    )
}

export default usersContext;
