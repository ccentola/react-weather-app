import { line, curveNatural } from 'd3';

const Marks = ({
  data,
  scaleX,
  scaleY,
  xValue,
  yValue,
  tooltipFormat,
  circleRadius,
}) => (
  <g className="marks">
    <path
      fill="none"
      stroke="black"
      d={line()
        .x((d) => scaleX(xValue(d)))
        .y((d) => scaleY(yValue(d)))
        .curve(curveNatural)(data)}
    />
    {data.map((d) => (
      <circle
        className="points"
        cx={scaleX(xValue(d))}
        cy={scaleY(yValue(d))}
        r={circleRadius}
        key={scaleX(xValue(d))}
      >
        <title>{tooltipFormat(xValue(d))}</title>
      </circle>
    ))}
  </g>
);

export default Marks;
