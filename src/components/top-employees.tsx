"use client";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export interface TopEmployeesProps {
  current_score: number;
  email: string;
  name: string;
  title: string;
}

export function TopEmployees({ data }: { data: TopEmployeesProps[] }) {
  return (
    <div className="space-y-8">
      {data?.map((item, key) => {
        return (
          <div className="flex items-center" key={key}>
            <Avatar className="h-9 w-9">
              <AvatarFallback>
                {item.name
                  .match(/(\b\S)?/g)
                  .join("")
                  .match(/(^\S|\S$)?/g)
                  .join("")
                  .toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">{item.title}</p>
              <p className="text-sm text-muted-foreground">
                {item.name}(<span className="text-xs">{item.email}</span>){" "}
              </p>
            </div>
            <div className="ml-auto font-medium">{item.current_score}</div>
          </div>
        );
      })}
    </div>
  );
}
