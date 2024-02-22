import React from 'react';
import { useContext, useState, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    const [balance, setBalance] = useState(0);
    useEffect(() => {
        const amounts = transactions.map(transaction => transaction.amount);
        console.log(amounts);
        const totalAmount = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
        setBalance(totalAmount);
    }, [transactions]);

    return (
        <div>
            <h4>Your Balance</h4>
            <h1>${balance}</h1>
        </div>
    );
}



export default Balance