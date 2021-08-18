import React, { createContext } from 'react';
import users from '../data/users';

const usersContext = createContext({})

export const UsersProvider = props => {
    return (
        <usersContext.Provider value={{
            state: {
                users
            }
        }}>
            {props.children}
        </usersContext.Provider>
    )
}

export default usersContext;
