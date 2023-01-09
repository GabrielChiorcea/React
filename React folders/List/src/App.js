import { useState } from 'react';
import Expense from './components/Expenses/Expense';
import NewExpense from './components/NewExpenses/NewExpense';

const oldExpenses = [
  {
    id: '2',
    title: 'bmw',
    amount: 223,
    date: new Date(),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(oldExpenses);

  const expenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={expenseHandler}></NewExpense>
      <Expense item={expenses}></Expense>
    </div>
  );
};

export default App;
