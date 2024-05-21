"use client";

import { useState } from "react";
import TeamSwitcher from "./team-switcher.";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Badge } from "./ui/badge";

export interface IEmployee {
  current_score: number;
  email: string;
  lessons_taken: number;
  name: string;
  skills_being_developed: [string];
  title: string;
}

export interface ITeam {
  description: string;
  title: string;
  overall_score: string;
  total_employees_count: number;
  employees: IEmployee[];
}

export function TeamsContent({ teams }: { teams: ITeam[] }) {
  const [currentTeam, setCurrentTeam] = useState<ITeam>(teams[0]);
  console.log({ currentTeam });
  return (
    <>
      <div className="hidden flex-col md:flex">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <TeamSwitcher data={teams} setCurrentTeam={setCurrentTeam} />
          </div>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 ">
        <Card className="col-span-7">
          <CardHeader className="flex flex-row items-center">
            <div className="grid gap-8">
              <CardTitle>{currentTeam.title}</CardTitle>
              <CardDescription>{currentTeam.description}</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Title</TableHead>

                  <TableHead>Lessons Taken</TableHead>
                  <TableHead>Current Score</TableHead>

                  <TableHead className="text-center">
                    Skills Being Developed
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentTeam.employees.map((item, key) => (
                  <TableRow key={key}>
                    <TableCell>
                      <div className="font-medium">{item.name}</div>
                      <div className="hidden text-sm text-muted-foreground md:inline">
                        {item.email}
                      </div>
                    </TableCell>
                    <TableCell>{item.title}</TableCell>
                    <TableCell>{item.lessons_taken}</TableCell>
                    <TableCell>{item.current_score}</TableCell>
                    <TableCell className="text-center">
                      {item?.skills_being_developed.map((i, k) => (
                        <Badge className="text-xs" variant="outline" key={k}>
                          {i}
                        </Badge>
                      ))}
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
