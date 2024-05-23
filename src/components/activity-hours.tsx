"use client";

import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
} from "recharts";

export interface ActivityHoursProps {
  date: string;
  exams_completed: number;
  hours: number;
  lessons_taken: number;
}

export function ActivityHours({ data }: { data: ActivityHoursProps[] }) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data} width={500} height={300}>
        <CartesianGrid strokeDasharray="5 5" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip shared={true} trigger="click" />
        <Legend />

        <Bar dataKey="hours" name="Hours" fill="#000000" />
        <Bar dataKey="lessons_taken" name="Lessons Taken" fill="#9fb223" />
        <Bar dataKey="exams_completed" name="Exams Completed" fill="#00e8dc" />
      </BarChart>
    </ResponsiveContainer>
  );
}
