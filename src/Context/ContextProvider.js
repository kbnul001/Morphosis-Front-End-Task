import React, { createContext } from 'react';
import useProducts from '../cutomhooks/useProducts';

export const AuthContext = createContext();


const ContextProvider = ({ children }) => {
    const allContext = useProducts();

    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextProvider;