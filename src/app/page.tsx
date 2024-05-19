import { Metadata } from "next";

// UI
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tiles } from "@/components/tiles";
import { TopEmployees } from "@/components/top-employees";
import { getData } from "./_actions/dashboard";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard Page.",
};

export default async function Home() {
  const data = await getData();
  const {
    top_employees,
    activity_hours,
    average_employee_score,
    in_progress_courses,
    skills_in_development,
    top_skills,
    teams,
    total_completed_courses,
    total_employees,
    upcoming_courses,
  } = data.data;

  return (
    <>
      <div className="hidden flex-col md:flex">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          </div>
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-3">
              <Tiles
                data={[
                  {
                    key: "total_employees",
                    title: "Total Employees",
                    value: total_employees,
                  },
                  {
                    key: "average_employee_score",
                    title: "Average Employee Score",
                    value: average_employee_score,
                  },
                  {
                    key: "total_completed_courses",
                    title: "Total Completed Courses",
                    value: total_completed_courses,
                  },
                ]}
              />

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle>Top Employees</CardTitle>
                    <CardDescription>
                      There are {top_employees.length} top employees
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <TopEmployees data={top_employees} />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
