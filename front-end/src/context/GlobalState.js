import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

const initialState = { 
    transactions: [],
    error: null,
    loading: true
};

// const testState = {
//     transactions: [
//         { id: 1, name: "Car Note", amount: -200 },
//         { id: 2, name: "Paycheck", amount: 1200 },
//         { id: 3, name: "Cellphone Bill", amount: -50 }
//     ]
// }

export const GlobalContext = createContext(initialState);


export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const getTransactions = async () => {
        try {
            const res = await axios.get('/api/v1/transactions');
    
            dispatch({
                type: 'GET_TRANSACTIONS',
                payload: res.data.data
            });
        } catch (err) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.reponse.data.error
            });
            
        }
    }

    const addTransaction = async (transaction) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await axios.post('/api/v1/transactions', transaction, config);
            
            dispatch({
                type:'ADD_TRANSACTION',
                payload: res.data.data
            })
        } catch (err) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.reponse.data.error
            });
        }  
    }

    const deleteTransaction = async (id) => {
        try {
            await axios.delete(`/api/v1/transactions/${id}`);

            dispatch({
                type: 'DELETE_TRANSACTION',
                payload: id 
            });
        } catch (err) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload:err.reponse.data.error
            });
            
        }
    }

    return(
    <GlobalContext.Provider value={{
        transactions: state.transactions,
        error: state.error,
        loading: state.loading,
        getTransactions,
        deleteTransaction,
        addTransaction,
        
    }}>
        {children}
    </GlobalContext.Provider>)
}

