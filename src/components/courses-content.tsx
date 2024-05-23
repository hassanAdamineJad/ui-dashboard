import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

interface ICourse {
  assigned_to: string;
  description: string;
  due_date: string;
  status: string;
  title: string;
}

export interface ICoursesContentProps {
  inProgressCourses: ICourse[];
  upcomingCourses: ICourse[];
}

export function CoursesContent({
  inProgressCourses,
  upcomingCourses,
}: ICoursesContentProps) {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 ">
        <Card className="col-span-7">
          <CardHeader className="flex flex-row items-center">
            <div className="grid gap-8">
              <CardTitle>Courses</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Assigned To</TableHead>

                  <TableHead>Due Date</TableHead>

                  <TableHead className="text-center">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[...inProgressCourses, ...upcomingCourses].map((item, key) => (
                  <TableRow key={key}>
                    <TableCell>
                      <div className="font-medium">{item.title}</div>
                      <div className="hidden text-sm text-muted-foreground md:inline">
                        {item.description}
                      </div>
                    </TableCell>
                    <TableCell>{item.assigned_to}</TableCell>
                    <TableCell>{item.due_date}</TableCell>
                    <TableCell className="text-center">
                      <Badge className="text-xs" variant="outline">
                        {item.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
