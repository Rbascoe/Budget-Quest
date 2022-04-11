import React, {useState} from "react";


export const AddTransaction = () =>{
    const [name, setName] = useState('');
    const [amount, setAmount] = useState(0);
    
    return (
        <form>
            <label>Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} ></input>
            <label>Amount</label>
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} ></input>
        </form>
    )
}