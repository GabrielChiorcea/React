import { useState } from 'react';
import ExpensesForm from './ExpensesForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const saveExpanseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEdited(false);
  };

  const [isEdited, setIsEdited] = useState(false);

  const startEditing = () => {
    setIsEdited(true);
  };

  const endEditing = () => {
    setIsEdited(false);
  };

  return (
    <div className="new-expense">
      {!isEdited && <button onClick={startEditing}>Add a new espense</button>}
      {isEdited && (
        <ExpensesForm
          onSaveExpanseData={saveExpanseDataHandler}
          cancel={endEditing}
        />
      )}
    </div>
  );
};

export default NewExpense;
