import React from "react";
import { scaleLinear, scaleTime, extent, timeFormat } from "d3";
import SearchBar from "./SearchBar";
import { useData } from "../hooks/useData";
import CurrentWeather from "./CurrentWeather";
import DailyCard from "./DailyCard";
import Navbar from "./Navbar";

import "./App.css";
import Chart from "./chart/Chart";

const width = 800;
const height = 250;

const App = () => {
  const [data, currentWeather, search] = useData("boston");

  console.log(currentWeather);
  console.log(data.hourly);

  const xValue = (d) => new Date(d.dt * 1000);
  const xAxisLabel = "Time";

  const yValue = (d) => d.temp;
  const yAxisLabel = "Temperature";

  const xAxisTickFormat = timeFormat("%H %p");

  if (!data) {
    return <div>Loading...</div>;
  }

  return data.hourly ? (
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
                  <Chart data={data.hourly} width={width} height={height} />
                  {/* <svg
                    width={width}
                    height={height}
                    viewBox={`0 0 ${Math.min(width, height)} ${Math.min(
                      width,
                      height
                    )}`}
                    preserveAspectRatio="xMinYMin"
                  >
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
                  </svg> */}
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
  ) : (
    <div>Loading...</div>
  );
};

export default App;
