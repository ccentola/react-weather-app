import React from "react";

const XMarkerLine = ({ xScale, innerHeight, value }) => {
  const markerLineX = xScale(value);
  const markerLineY1 = 0;
  const markerLineY2 = innerHeight;
  return (
    <>
      <line
        className="marker-line"
        x1={markerLineX}
        y1={markerLineY1}
        x2={markerLineX}
        y2={markerLineY2}
      />
      <text
        textAnchor="middle"
        alignmentBaseline="hanging"
        x={markerLineX}
        y={markerLineY2 + 8}
      >
        now{" "}
      </text>
    </>
  );
};

export default XMarkerLine;
