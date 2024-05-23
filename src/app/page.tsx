import { Metadata } from "next";

// UI

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getData } from "./_actions/dashboard";
import { OverviewContent } from "@/components/overview-content";
import { TeamsContent } from "@/components/team-content";
import { CoursesContent } from "@/components/courses-content";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard Page.",
};

export default async function Home() {
  const data = await getData();
  const {
    activity_hours,
    average_employee_score,
    in_progress_courses,
    skills_in_development,
    teams,
    top_employees,
    top_skills,
    total_completed_courses,
    total_employees,
    upcoming_courses,
  } = data.data;

  return (
    <>
      <div className=" flex-col md:flex">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          </div>
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="teams">Teams</TabsTrigger>
              <TabsTrigger value="courses">Courses</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-3">
              <OverviewContent
                activityHours={activity_hours}
                averageEmployeeScore={average_employee_score}
                totalEmployees={total_employees}
                totalCompletedCourses={total_completed_courses}
                topSkills={top_skills}
                topEmployees={top_employees}
                inProgressCourses={in_progress_courses.length}
                upcomingCourses={upcoming_courses.length}
              />
            </TabsContent>

            <TabsContent value="teams" className="space-y-3">
              <TeamsContent teams={teams} />
            </TabsContent>
            <TabsContent value="courses" className="space-y-3">
              <CoursesContent
                inProgressCourses={in_progress_courses}
                upcomingCourses={upcoming_courses}
              />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
