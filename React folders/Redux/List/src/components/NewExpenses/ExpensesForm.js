import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpensesForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleHandler = (e) => {
    setEnteredTitle(e.target.value);
  };
  const AmountHandler = (e) => {
    setEnteredAmount(e.target.value);
  };
  const DateHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpanseData(expenseData);

    setEnteredTitle('');
    setEnteredDate('');
    setEnteredAmount('');
    return expenseData;
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={AmountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2022-12-12"
            max="2024-12-12"
            value={enteredDate}
            onChange={DateHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
        <button type="button" onClick={props.cancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ExpensesForm;
