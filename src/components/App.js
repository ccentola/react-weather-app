import React from 'react';
import { scaleLinear, scaleTime, extent, utcFormat } from 'd3';
import SearchBar from './SearchBar';
import { useData } from '../hooks/useData';
import Marks from './Marks';
import AxisLeft from './AxisLeft';
import AxisBottom from './AxisBottom';
import './App.css';

const width = 960;
const height = 500;
const margin = { top: 20, right: 30, bottom: 65, left: 90 };
const xAxisLabelOffset = 50;
const yAxisLabelOffset = 45;

const App = () => {
  const [data, search] = useData('boston');

  if (!data) {
    return <pre>Loading...</pre>;
  }

  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  const xValue = (d) => new Date(d.dt * 1000);
  const xAxisLabel = 'Time';

  const yValue = (d) => d.temp;
  const yAxisLabel = 'Temperature';

  const xAxisTickFormat = utcFormat('%H');

  const scaleX = scaleTime()
    .domain(extent(data, xValue))
    .range([0, innerWidth])
    .nice();

  const scaleY = scaleLinear()
    .domain(extent(data, yValue))
    .range([innerHeight, 0])
    .nice();

  // console.log(data);

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search} />

      <svg width={width} height={height}>
        <g transform={`translate(${margin.left},${margin.top})`}>
          <AxisBottom
            scaleX={scaleX}
            innerHeight={innerHeight}
            tickFormat={xAxisTickFormat}
            tickOffset={7}
          />
          <text
            className="axis-label"
            textAnchor="middle"
            transform={`translate(${-yAxisLabelOffset},${
              innerHeight / 2
            }) rotate(-90)`}
          >
            {yAxisLabel}
          </text>
          <AxisLeft yScale={scaleY} innerWidth={innerWidth} tickOffset={7} />
          <text
            className="axis-label"
            x={innerWidth / 2}
            y={innerHeight + xAxisLabelOffset}
            textAnchor="middle"
          >
            {xAxisLabel}
          </text>
          <Marks
            data={data}
            scaleX={scaleX}
            scaleY={scaleY}
            xValue={xValue}
            yValue={yValue}
            tooltipFormat={xAxisTickFormat}
            circleRadius={3}
          />
        </g>
      </svg>
    </div>
  );
};

export default App;
