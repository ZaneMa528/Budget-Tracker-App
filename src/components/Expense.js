import React from 'react';
import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Expense = () => {
    const { transactions } = useContext(GlobalContext);
    const [incomeExpanse, setIncomeExpanse] = useState({
        income: 0,
        expense: 0,
    });

    useEffect(() => {
        const amounts = transactions.map(transaction => transaction.amount);
        const income = amounts
            .filter(item => item > 0)
            .reduce((acc, item) => (acc += item), 0)
            .toFixed(2);
        const expense = amounts
            .filter(item => item < 0)
            .reduce((acc, item) => (acc += item), 0)
            .toFixed(2);
        setIncomeExpanse({ income, expense });
    }, [transactions])
    return (
        <div>
            <div>
                <h4>Income</h4>
                <p className="money plus">{incomeExpanse.income}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">{incomeExpanse.expense}</p>
            </div>
        </div>
    )
}

export default Expense