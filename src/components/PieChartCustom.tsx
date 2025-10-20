import { memo } from "react";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  type PieLabelRenderProps,
} from "recharts";

const PieChartCustom = () => {
  const data = [
    { name: "tatu", value: "2400" },
    { name: "stanford", value: "2800" },
    { name: "adu", value: "3200" },
    { name: "harvard", value: "3600" },
    { name: "oxford", value: "4000" },
  ];

  const COLORS = ["#e03535ff", "#3ee035ff", "#3574e0ff"];
  const RADIAN = Math.PI / 180;

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }: PieLabelRenderProps) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;

    const x = cx + radius * Math.cos(-(midAngle ?? 0) * RADIAN);

    const y = cy + radius * Math.sin(-(midAngle ?? 0) * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${((percent ?? 1) * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Tooltip />
        <Pie
          stroke={"none"}
          strokeWidth="10"
          labelLine={false}
          data={data}
          name="name"
          dataKey="value"
          label={renderCustomizedLabel}
        >
          {data.map((_, i) => (
            <Cell fill={COLORS[i]} />
          ))}
        </Pie>
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default memo(PieChartCustom);
