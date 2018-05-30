import React from "react";
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  LineSeries
} from "react-vis";

const Chart = props => {
  const dataArr = props.data.map(d => {
    return { x: d.date.local.substr(0, 16), y: d.value };
  });

  console.log(dataArr);
  return (
    <XYPlot xType="ordinal" width={window.innerWidth} height={500}>
      <VerticalGridLines />
      <HorizontalGridLines />
      <XAxis title="Date" tickLabelAngle={-10} />
      <YAxis title="Amount of CO in µg/m³" />
      <LineSeries
        data={dataArr.slice(0, 15).reverse()}
        style={{ stroke: "blue", strokeWidth: 3 }}
      />
    </XYPlot>
  );
};

export default Chart;
