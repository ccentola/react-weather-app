import React from 'react';
import { scaleLinear, scaleTime, extent, timeFormat } from 'd3';
import SearchBar from './SearchBar';
import { useData } from '../hooks/useData';
import Marks from './Marks';
import AxisLeft from './AxisLeft';
import AxisBottom from './AxisBottom';
import './App.css';
import CurrentWeather from './CurrentWeather';
import DailyCard from './DailyCard';
import Navbar from './Navbar';

const width = 800;
const height = 250;
const margin = { top: 20, right: 30, bottom: 50, left: 60 };
const xAxisLabelOffset = 50;
const yAxisLabelOffset = 45;

const App = () => {
  const [data, currentWeather, search] = useData('boston');

  console.log(currentWeather);
  console.log(data);

  const newDay = data.hourly.filter((eDate) => {
    const rawDate = new Date(eDate.dt * 1000);
    return (
      rawDate.getHours() === 0 &&
      rawDate.getMinutes() === 0 &&
      rawDate.getSeconds() === 0
    );
  });

  // console.log(newDay[0].dt);

  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  const xValue = (d) => new Date(d.dt * 1000);
  const xAxisLabel = 'Time';

  const yValue = (d) => d.temp;
  const yAxisLabel = 'Temperature';

  const xAxisTickFormat = timeFormat('%H %p');

  const scaleX = scaleTime()
    .domain(extent(data.hourly.slice(0, 12), xValue))
    .range([0, innerWidth])
    .nice();

  const scaleY = scaleLinear()
    .domain(extent(data.hourly.slice(0, 12), yValue))
    .range([innerHeight, 0])
    .nice();

  return (
    <>
      <Navbar />
      <div className="ui container">
        <SearchBar onFormSubmit={search} />
        <div className="ui stackable grid">
          <div className="row">
            <div className="four wide column">
              <div className="ui dividing header">Current Conditions</div>
              {currentWeather && <CurrentWeather weather={currentWeather} />}
            </div>
            <div className="twelve wide column">
              <div className="ui dividing header">Hourly Forecast</div>
              <div className="ui fluid card">
                <div className="content">
                  <svg
                    width={width}
                    height={height}
                    viewBox={`0 0 ${Math.min(width, height)} ${Math.min(
                      width,
                      height
                    )}`}
                    preserveAspectRatio="xMinYMin"
                  >
                    <g transform={`translate(${margin.left},${margin.top})`}>
                      {/* {data.daily ? (
                      <rect
                        x={scaleX(new Date(data.daily[0].sunset * 1000))}
                        width={
                          scaleX(new Date(data.daily[1].sunrise * 1000)) -
                          scaleX(new Date(data.daily[0].sunset * 1000))
                        }
                        height={innerHeight}
                        fill="purple"
                      />
                    ) : (
                      <rect />
                    )} */}
                      <AxisBottom
                        scaleX={scaleX}
                        innerHeight={innerHeight}
                        tickFormat={xAxisTickFormat}
                        tickOffset={7}
                      />
                      {/* <line
                      x1={scaleX(new Date(newDay[0].dt * 1000))}
                      x2={scaleX(new Date(newDay[0].dt * 1000))}
                      y1={0}
                      y2={innerHeight}
                      stroke="black"
                      strokeWidth="2px"
                    /> */}
                      <text
                        className="axis-label"
                        textAnchor="middle"
                        transform={`translate(${-yAxisLabelOffset},${
                          innerHeight / 2
                        }) rotate(-90)`}
                      >
                        {yAxisLabel}
                      </text>
                      <AxisLeft
                        yScale={scaleY}
                        innerWidth={innerWidth}
                        tickOffset={7}
                      />
                      <text
                        className="axis-label"
                        x={innerWidth / 2}
                        y={innerHeight + xAxisLabelOffset}
                        textAnchor="middle"
                      >
                        {xAxisLabel}
                      </text>
                      <Marks
                        data={data.hourly.slice(0, 12)}
                        scaleX={scaleX}
                        scaleY={scaleY}
                        xValue={xValue}
                        yValue={yValue}
                        tooltipFormat={xAxisTickFormat}
                        circleRadius={3}
                      />
                      <line
                        stroke="black"
                        x1={scaleX(0)}
                        x2={scaleX(0)}
                        y1={height}
                        y2="0"
                      />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="sixteen wide column">
              <div className="ui dividing header">Next 7 Days</div>
              <div className="ui seven stackable cards">
                {data.daily.slice(1, 8).map((d) => (
                  <DailyCard data={d} key={d.dt} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
