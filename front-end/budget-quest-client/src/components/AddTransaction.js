import React, {useState} from "react";


export const AddTransaction = () =>{
    const [name, setName] = useState('');
    const [amount, setAmount] = useState(0);
    
    return (
        <form>
            <label>Name</label>
            <input></input>
        </form>
    )
}