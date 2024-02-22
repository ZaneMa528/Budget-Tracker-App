import React from 'react'
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { useState } from 'react';

const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const onSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    };
    addTransaction(newTransaction);
    setText('');
    setAmount(0);
  };

  return (
    <div>
      <h3>Add new transaction</h3>
      <form id='form'>
        <div className='form-control'>
          <label>Text</label>
          <input
            type='text'
            value={text}
            placeholder='Enter text...'
            id='text'
            onChange={(e) => setText(e.target.value)}
            autoComplete='off'
          />
        </div>
        <div className='form-control'>
          <label>Amount</label>
          <input
            type='number'
            value={amount}
            placeholder='Enter amount...'
            id='amount'
            onChange={(e) => setAmount(e.target.value)}
            autoComplete='off'
          />
        </div>
        <button
          className='btn'
          onClick={onSubmit}
        >Add transaction</button>
      </form>
    </div>
  );
}


export default AddTransaction