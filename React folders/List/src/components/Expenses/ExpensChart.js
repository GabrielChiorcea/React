import Chart from '../Chart/Chart';

const ExpenseChart = (props) => {
  const chartDataPoints = [
    { label: 'Ian', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'Mai', value: 0 },
    { label: 'Iun', value: 0 },
    { label: 'Iul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Noi', value: 0 },
    { label: 'Dec', value: 0 },
  ];
  for (const expenses of props.expenses) {
    const expensesMounth = expenses.date.getMonth();
    chartDataPoints[expensesMounth].value += expenses.amount;
  }

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpenseChart;
