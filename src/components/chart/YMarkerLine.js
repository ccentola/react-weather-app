import React from "react";

const YMarkerLine = ({ yScale, innerWidth, value }) => {
  const markerLineY = yScale(value);
  const markerLineX1 = 0;
  const markerLineX2 = innerWidth;
  return (
    <>
      <line
        className="marker-line"
        x1={markerLineX1}
        x2={markerLineX2}
        y1={markerLineY}
        y2={markerLineY}
      />
      <text
        textAnchor="end"
        alignmentBaseline="middle"
        x={markerLineX1 - 8}
        y={markerLineY}
      >
        {value}
      </text>
    </>
  );
};

export default YMarkerLine;
