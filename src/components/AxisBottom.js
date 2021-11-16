const AxisBottom = ({ scaleX, innerHeight, tickFormat, tickOffset = 3 }) =>
  scaleX.ticks().map((tickValue) => {
    const today = new Date();
    return (
      <g
        className="tick"
        key={tickValue}
        transform={`translate(${scaleX(tickValue)},0)`}
      >
        <line y2={innerHeight} />
        <text
          style={{ textAnchor: 'middle' }}
          dy=".71em"
          y={innerHeight + tickOffset}
        >
          {tickFormat(tickValue)}
        </text>
      </g>
    );
  });

export default AxisBottom;
