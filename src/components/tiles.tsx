"use client";
import { ReactElement } from "react";
import { Award, BookOpenCheck, BookUp, Loader, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const ICONS: { [key: string]: ReactElement } = {
  total_employees: <Users />,
  total_completed_courses: <Award />,
  average_employee_score: <BookOpenCheck />,
  in_progress_courses: <Loader />,
  upcoming_courses: <BookUp />,
};

export interface TilesProps {
  key: string;
  title: string;
  value: number | string;
}

export function Tiles({ data }: { data: TilesProps[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-5 lg:grid-cols-5">
      {data.map((item, key) => (
        <Card key={key}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xs font-medium">{item.title}</CardTitle>
            {ICONS[`${item.key}`]}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{item.value}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
