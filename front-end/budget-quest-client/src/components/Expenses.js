import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Expenses = () => {
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);

    const expense = amounts
        .filter(item => item < 0)
        .reduce((acc, item) => (acc += item), 0) * -1
        .toFixed(2);

    return (
        <>
        <h2>Expenses</h2>
        <h2>${expense}</h2>
        </>
    )
}