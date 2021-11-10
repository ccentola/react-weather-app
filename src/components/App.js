import React from 'react';
import { scaleLinear, scaleTime, extent, timeFormat } from 'd3';
import moment from 'moment';
import SearchBar from './SearchBar';
import { useData } from '../hooks/useData';
import Marks from './Marks';
import AxisLeft from './AxisLeft';
import AxisBottom from './AxisBottom';
import './App.css';
import CurrentWeather from './CurrentWeather';
import { useFetch } from '../hooks/useFetch';
import openWeather from '../api/openWeather';
import DailyCard from './DailyCard';

// const width = 850;
// const height = 300;
// const margin = { top: 20, right: 30, bottom: 65, left: 90 };
// const xAxisLabelOffset = 50;
// const yAxisLabelOffset = 45;

const App = () => {
  //   const [{ data, isLoading, isError }, search] = useData('boston');
  const [data, currentWeather, search] = useData('boston');

  console.log(data.daily);

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="row">
          <div className="four wide column">
            {currentWeather && <CurrentWeather weather={currentWeather} />}
          </div>
        </div>
        <div className="row">
          <div className="two wide column">
            <div>Daily</div>
          </div>
        </div>
        <div className="row">
          <div className="sixteen wide column">
            <div className="ui eight stackable cards">
              {data.daily.map((d) => (
                <DailyCard data={d} key={d.dt} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// const innerHeight = height - margin.top - margin.bottom;
// const innerWidth = width - margin.left - margin.right;

// const xValue = (d) => new Date(d.dt * 1000);
// const xAxisLabel = 'Time';

// const yValue = (d) => d.temp;
// const yAxisLabel = 'Temperature';

// const xAxisTickFormat = timeFormat('%H:%M');

// const scaleX = scaleTime()
//   .domain(extent(data.hourly.slice(0, 24), xValue))
//   .range([0, innerWidth])
//   .nice();

// const scaleY = scaleLinear()
//   .domain(extent(data.hourly.slice(0, 24), yValue))
//   .range([innerHeight, 0])
//   .nice();

// return (
//   <div className="ui container">
//     <SearchBar onFormSubmit={search} />
//     <div className="ui grid">
//       <div className="ui row">
//         <div className="four wide column">
//           <CurrentWeather />
//         </div>
//         <div className="ten wide column">
//           <svg width={width} height={height}>
//             <g transform={`translate(${margin.left},${margin.top})`}>
//               <AxisBottom
//                 scaleX={scaleX}
//                 innerHeight={innerHeight}
//                 tickFormat={xAxisTickFormat}
//                 tickOffset={7}
//               />
//               <text
//                 className="axis-label"
//                 textAnchor="middle"
//                 transform={`translate(${-yAxisLabelOffset},${
//                   innerHeight / 2
//                 }) rotate(-90)`}
//               >
//                 {yAxisLabel}
//               </text>
//               <AxisLeft
//                 yScale={scaleY}
//                 innerWidth={innerWidth}
//                 tickOffset={7}
//               />
//               <text
//                 className="axis-label"
//                 x={innerWidth / 2}
//                 y={innerHeight + xAxisLabelOffset}
//                 textAnchor="middle"
//               >
//                 {xAxisLabel}
//               </text>
//               <Marks
//                 data={data.hourly.slice(0, 24)}
//                 scaleX={scaleX}
//                 scaleY={scaleY}
//                 xValue={xValue}
//                 yValue={yValue}
//                 tooltipFormat={xAxisTickFormat}
//                 circleRadius={3}
//               />
//               <line
//                 stroke="black"
//                 x1={scaleX(0)}
//                 x2={scaleX(0)}
//                 y1={height}
//                 y2="0"
//               />
//             </g>
//           </svg>
//         </div>
//       </div>
//     </div>
//   </div>
// );
export default App;
