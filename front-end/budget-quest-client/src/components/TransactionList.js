import React, { useContext } from "react";
import { Transaction } from "./Transaction";
import { GlobalContext } from "../context/GlobalState";


export const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);

    return (
        <>
            <h2>Transactions</h2>
            <ul>
               {transactions.map(transaction => (
                   <Transaction key={transaction.id} transaction={transaction} ></Transaction>
               ))}
            </ul>
        </>
    
       )
}