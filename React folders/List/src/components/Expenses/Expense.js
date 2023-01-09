import { useState } from 'react';
import ExpenseList from './ExpenseList';
import ExpenseFilter from './ExpenseFilter';
import Card from '../UI/Card';
import './Expense.css';
import ExpenseChart from './ExpensChart';

function Expense(props) {
  const [filteredYear, setFilteredYear] = useState('2025');
  const filterChangrHandlet = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const fillterArray = props.item.filter((el) => {
    return el.date.getFullYear().toString() === filteredYear;
  });

  return (
    <li>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangrHandlet}
        />
        <ExpenseChart expenses={fillterArray} />
        <ExpenseList item={fillterArray} />
      </Card>
    </li>
  );
}

export default Expense;
