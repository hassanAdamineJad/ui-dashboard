"use client";

import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";

export interface IOverviewTopSkills {
  skill: string;
  employees: number;
  employeeInDevelop: number;
}

export function OverviewTopSkills({ data }: { data: IOverviewTopSkills[] }) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data} width={500} height={300}>
        <XAxis
          dataKey="skill"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          name="Top Skill"
        />
        <YAxis
          stroke="#888888"
          fontSize={14}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <Legend />
        <Bar
          // stackId="a"
          dataKey="employees"
          name="Top Skill"
          fill="currentColor"
          radius={[4, 4, 0, 0]}
          className="fill-primary"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
