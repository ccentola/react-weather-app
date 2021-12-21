import React from "react";
import { scaleTime, scaleLinear, extent, max, line, format } from "d3";
// import YMarkerLine from "./YMarkerLine";
// import XMarkerLine from "./XMarkerLine";
import XAxis from "./XAxis";
import YAxis from "./YAxis";

// x and y values
const xValue = (d) => new Date(d.dt * 1000);
const yValue = (d) => d.temp;

const margin = { top: 20, right: 40, bottom: 40, left: 60 };

const Chart = ({ data, width, height }) => {
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  // scales
  const xScale = scaleTime()
    .domain(extent(data.slice(0, 12), xValue))
    .range([0, innerWidth]);

  const yScale = scaleLinear()
    .domain(extent(data.slice(0, 12), yValue))
    .range([innerHeight, 0]);

  const lineGenerator = line()
    .x((d) => xScale(xValue(d)))
    .y((d) => yScale(yValue(d)));

  console.log(yScale.domain());

  //   const mostRecentDate = xScale.domain()[1];
  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left},${margin.top})`}>
        {/* <YMarkerLine yScale={yScale} innerWidth={innerWidth} value={10000} />
        <XMarkerLine
          xScale={xScale}
          innerHeight={innerHeight}
          value={mostRecentDate}
        /> */}
        <XAxis xScale={xScale} innerHeight={innerHeight} />
        <YAxis yScale={yScale} innerWidth={innerWidth} />

        <path d={lineGenerator(data)} />
      </g>
    </svg>
  );
};

export default Chart;
