import React, { useRef, useEffect } from "react";
import { select, axisBottom } from "d3";

const XAxis = ({ xScale, innerHeight }) => {
  const ref = useRef();
  useEffect(() => {
    const xAxisG = select(ref.current);
    const xAxis = axisBottom(xScale).tickSize(-innerHeight).tickPadding(18);
    xAxisG.call(xAxis);
  }, [xScale]);
  return <g transform={`translate(0,${innerHeight})`} ref={ref}></g>;
};

export default XAxis;
