"use client";
import {
  OverviewTopSkillsProps as IOverviewTopSkills,
  OverviewTopSkills,
} from "./top-skills";

import { Tiles } from "./tiles";
import { TopEmployees, TopEmployeesProps } from "./top-employees";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { ActivityHours } from "./activity-hours";

interface OverviewContentProps {
  activityHours: {
    date: string;
    exams_completed: number;
    hours: number;
    lessons_taken: number;
  }[];
  topSkills: IOverviewTopSkills[];
  totalEmployees: number;
  averageEmployeeScore: number;
  totalCompletedCourses: number;
  upcomingCourses: number;
  inProgressCourses: number;
  topEmployees: TopEmployeesProps[];
}

export function OverviewContent({
  activityHours,
  topSkills,
  totalEmployees,
  averageEmployeeScore,
  totalCompletedCourses,
  topEmployees,
  upcomingCourses,
  inProgressCourses,
}: OverviewContentProps) {
  return (
    <>
      <Tiles
        data={[
          {
            key: "total_employees",
            title: "Total Employees",
            value: totalEmployees,
          },
          {
            key: "average_employee_score",
            title: "Average Employee Score",
            value: averageEmployeeScore,
          },
          {
            key: "total_completed_courses",
            title: "Total Completed Courses",
            value: totalCompletedCourses,
          },
          {
            key: "in_progress_courses",
            title: "In Progress Courses",
            value: inProgressCourses,
          },
          {
            key: "upcoming_courses",
            title: "Upcoming Courses",
            value: upcomingCourses,
          },
        ]}
      />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-7">
          <CardHeader>
            <CardTitle>Activity Hours</CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            <ActivityHours data={activityHours} />
          </CardContent>
        </Card>

        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Top Skills</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <OverviewTopSkills data={topSkills} />
          </CardContent>
        </Card>

        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Top Employees</CardTitle>
            <CardDescription>
              There are {topEmployees.length} top employees
            </CardDescription>
          </CardHeader>
          <CardContent>
            <TopEmployees data={topEmployees} />
          </CardContent>
        </Card>
      </div>
    </>
  );
}
