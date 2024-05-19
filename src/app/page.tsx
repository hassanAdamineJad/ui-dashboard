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
import { ITopEmployees, TopEmployees } from "@/components/top-employees";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard Page.",
};
export default function Home() {
  const TOP_EMPLOYEES = [
    {
      current_score: 4.5,
      email: "johndoe@gmail.com",
      name: "John Doe",
      title: "Customer Success Manager",
    },
    {
      current_score: 4.5,
      email: "sarahjohnson@gmail.com",
      name: "Sarah Johnson",
      title: "Senior Software Engineer",
    },
    {
      current_score: 4.5,
      email: "alexjohnson@gmail.com",
      name: "Alex Johnson",
      title: "Digital Marketing Specialist",
    },
  ] as ITopEmployees[];

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
              <Tiles />

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle>Top Employees</CardTitle>
                    <CardDescription>
                      There are {TOP_EMPLOYEES.length} top employees
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <TopEmployees data={TOP_EMPLOYEES} />
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
