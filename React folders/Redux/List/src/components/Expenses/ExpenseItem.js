import ExpenseDate from './ExpenseDate';
import React, { useState } from 'react';
import Card from '../UI/Card';

import './ExpenseItem.css';

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle('penis');
  };
  return (
    <div>
      <Card className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item__description">
          <h2>{title.toUpperCase()}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        <button onClick={clickHandler}>Event</button>
      </Card>
    </div>
  );
}

export default ExpenseItem;
