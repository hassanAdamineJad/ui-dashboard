"use client";
import { IOverviewTopSkills, OverviewTopSkills } from "./overview-top-skills";
import { Tiles } from "./tiles";
import { TopEmployees, ITopEmployees } from "./top-employees";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface IOverviewContent {
  topSkills: IOverviewTopSkills[];
  totalEmployees: number;
  averageEmployeeScore: number;
  totalCompletedCourses: number;
  topEmployees: ITopEmployees[];
}

export function OverviewContent({
  topSkills,
  totalEmployees,
  averageEmployeeScore,
  totalCompletedCourses,
  topEmployees,
}: IOverviewContent) {
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
        ]}
      />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
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
