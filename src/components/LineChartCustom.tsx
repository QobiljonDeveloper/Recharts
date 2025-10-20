import { memo } from "react";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const LineChartCustom = () => {
  const data = [
    { year: "1990", harvard: 3500, standford: 2500, oxford: 3000 },
    { year: "2000", harvard: 3400, standford: 2600, oxford: 3200 },
    { year: "2010", harvard: 3000, standford: 2700, oxford: 3600 },
    { year: "2020", harvard: 4000, standford: 3700, oxford: 2900 },
    { year: "2025", harvard: 4000, standford: 5700, oxford: 4200 },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <Tooltip />
        <Line
          stroke="#e03535ff"
          type="monotone"
          activeDot={false}
          dot={false}
          dataKey="harvard"
        />
        <Line
          stroke="#3ee035ff"
          type="monotone"
          activeDot={false}
          dot={false}
          dataKey="standford"
        />
        <Line type="monotone" activeDot={false} dot={false} dataKey="oxford" />
        <XAxis
          tick={{ fill: "white" }}
          tickLine={{ stroke: "white" }}
          axisLine={{ stroke: "white" }}
          dataKey="year"
        />
        <YAxis
          tick={{ fill: "white" }}
          tickLine={{ stroke: "white" }}
          axisLine={{ stroke: "white" }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default memo(LineChartCustom);
