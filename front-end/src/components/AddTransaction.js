import React, {useContext, useState} from "react";
import { GlobalContext } from "../context/GlobalState";


export const AddTransaction = () =>{
    const [name, setName] = useState('');
    const [amount, setAmount] = useState(0);

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newTranscation = {
            id: Math.floor(Math.random() * 100000000),
            name,
            amount: +amount
        }
        addTransaction(newTranscation);
    }

    
    return (
        <>
        <h3>Enter a new Transaction</h3>
        <form onSubmit={onSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} 
            placeholder="Enter Name" />
            <label htmlFor="amount">Amount</label>
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} 
            placeholder="Enter Amount"/>
            <button className="btn">Add transaction</button>
        </form>
        </>
    )
}