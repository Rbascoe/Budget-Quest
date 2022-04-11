import React from 'react'

export const Transaction = ( { transaction } ) => {
    const sign = transaction.amount < 0 ? '-':'+';

    return (
        <li>
            {transaction.name} <span>{sign}${Math.abs(transaction.amount)}</span>
        </li>
    )
}
