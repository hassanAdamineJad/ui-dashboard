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

export interface OverviewTopSkillsProps {
  skill: string;
  employees: number;
  employeeInDevelop: number;
}

export function OverviewTopSkills({
  data,
}: {
  data: OverviewTopSkillsProps[];
}) {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={data.sort((a, b) => b.employees - a.employees)}>
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
