import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
  const dataPointValue = props.dataPoints.map((dataPoint) => dataPoint.value);
  const dataPoinrMaxValue = Math.max(...dataPointValue);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoints) => {
        return (
          <ChartBar
            key={dataPoints.label}
            value={dataPoints.value}
            maxValue={dataPoinrMaxValue}
            label={dataPoints.label}
          />
        );
      })}
    </div>
  );
};

export default Chart;
