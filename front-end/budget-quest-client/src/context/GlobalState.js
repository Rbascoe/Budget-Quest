import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = { 
    transactions: [
        { id: 1, name: "Car Note", amount: -200 },
        { id: 2, name: "Paycheck", amount: 1200 },
        { id: 3, name: "Cellphone Bill", amount: -50 }
    ]
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return(
    <GlobalContext.Provider value={{
        transactions: state.transactions
    }}>
        {children}
    </GlobalContext.Provider>)
}

