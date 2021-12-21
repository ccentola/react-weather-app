import React, { useRef, useEffect } from "react";
import { select, axisLeft, format } from "d3";

const YAxis = ({ yScale, innerWidth }) => {
  const ref = useRef();
  useEffect(() => {
    const YAxisG = select(ref.current);
    const YAxis = axisLeft(yScale)
      .tickSize(-innerWidth)
      .tickPadding(18)
      .tickFormat(format("d"));
    YAxisG.call(YAxis);
  }, [yScale]);
  return <g ref={ref}></g>;
};

export default YAxis;
