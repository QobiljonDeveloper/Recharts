import { memo } from "react";
import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const BarChartCustom = () => {
  const data = [
    { year: "1990", harvard: 3500, standford: 2500 },
    { year: "2000", harvard: 3400, standford: 2600 },
    { year: "2010", harvard: 3000, standford: 2700 },
    { year: "2020", harvard: 4000, standford: 3700 },
    { year: "2025", harvard: 4000, standford: 5700 },
  ];

  return (
    <div style={{ width: "100%", height: 400 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical">
          <Tooltip
            cursor={{ fill: "rgba(252, 0, 0, 0.3)" }}
            content={({ active, payload, label }) => {
              if (active && payload && payload.length) {
                return (
                  <div
                    style={{
                      background: "white",
                      borderRadius: 8,
                      padding: "6px 10px",
                      boxShadow: "0 0 5px rgba(0,0,0,0.2)",
                    }}
                  >
                    <p>Year: {label}</p>
                    {payload.map((p, i) => (
                      <p key={i}>
                        {p.name}: <b>{p.value}</b>
                      </p>
                    ))}
                  </div>
                );
              }
              return null;
            }}
          />

          <XAxis type="number" tick={{ fill: "#fff" }} />
          <YAxis
            type="category"
            dataKey="year"
            tick={{ fill: "#fff" }}
            width={80}
          />

          <Bar
            dataKey="harvard"
            fill="#e03535"
            barSize={20}
            radius={[4, 4, 0, 0]}
          />
          <Bar
            dataKey="standford"
            fill="#3ee035"
            barSize={20}
            radius={[4, 4, 0, 0]}
          />

          <Legend
            verticalAlign="bottom"
            align="center"
            content={({ payload }) => (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "10px",
                  color: "#fff",
                  marginTop: "10px",
                }}
              >
                {payload?.map((entry, index) => (
                  <span key={index} style={{ color: entry.color }}>
                    ● {entry.value}
                  </span>
                ))}
              </div>
            )}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default memo(BarChartCustom);
