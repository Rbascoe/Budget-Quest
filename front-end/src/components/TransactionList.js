import React, { useContext, useEffect } from "react";
import { Transaction } from "./Transaction";
import { GlobalContext } from "../context/GlobalState";


export const TransactionList = () => {
    const { transactions, getTransactions } = useContext(GlobalContext);

    useEffect(() => {
        getTransactions();
    }, []);

    return (
        <>
            <h2>Transactions</h2>
            <ul>
               {transactions.map(transaction => (
                   <Transaction key={transaction._id} transaction={transaction} ></Transaction>
               ))}
            </ul>
        </>
    
       )
}