import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ( { transaction } ) => {
    const { deleteTransaction } = useContext(GlobalContext);
    const sign = transaction.amount < 0 ? '-':'+';

    return (
        <li>
            {transaction.name} <span>{sign}${Math.abs(transaction.amount)}</span>
            <button onClick={() => deleteTransaction(transaction._id)}>x</button>
        </li>
    )
}
