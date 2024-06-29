import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = ({ dataPoints }) => {
  //to get the maxValue for each month from the props datapoint passed
  const chartValuePoint = dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaxValue = Math.max(...chartValuePoint);
  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaxValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
