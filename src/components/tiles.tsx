"use client";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function Tiles() {
  return (
    <div className="grid gap-3 md:grid-cols-3 lg:grid-cols-3">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Employees</CardTitle>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="h-4 w-4 text-muted-foreground"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">14</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Completed Courses
          </CardTitle>

          <svg
            width="24px"
            height="24px"
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
            stroke-width="3"
            stroke="#000000"
            fill="none"
          >
            <path d="M50.28,23.29V43.94a1.74,1.74,0,0,1-1.74,1.74H11.3a1.74,1.74,0,0,1-1.74-1.74V17.85a1.74,1.74,0,0,1,1.74-1.74H37.07" />
            <line x1="9.56" y1="39.19" x2="50.28" y2="39.19" />
            <path d="M22.23,52.54a5.72,5.72,0,0,0,3-6.86" />
            <path d="M38.38,52.54a5.73,5.73,0,0,1-3.05-6.86" />
            <line
              x1="17.45"
              y1="52.54"
              x2="42.39"
              y2="52.54"
              stroke-linecap="round"
            />
            <circle cx="22.13" cy="25.21" r="3.53" />
            <path d="M29.28,39.19a7.15,7.15,0,0,0-7.15-7.14h0A7.14,7.14,0,0,0,15,39.19Z" />
            <path d="M53.58,23.29h-8.4L40.1,26.88a.09.09,0,0,1-.14-.07l0-3.52H37.93a.87.87,0,0,1-.86-.86V12.32a.86.86,0,0,1,.86-.86H53.58a.86.86,0,0,1,.86.86V22.43A.87.87,0,0,1,53.58,23.29Z" />
          </svg>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">100</div>
          <p className="text-xs text-muted-foreground"></p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Average Employee Score
          </CardTitle>
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.94358 3.25H14.0564C15.8942 3.24998 17.3498 3.24997 18.489 3.40314C19.6614 3.56076 20.6104 3.89288 21.3588 4.64124C22.1071 5.38961 22.4392 6.33856 22.5969 7.51098C22.6873 8.18385 22.7244 8.9671 22.7395 9.87428C22.7464 9.91516 22.75 9.95716 22.75 10C22.75 10.0353 22.7476 10.0699 22.7429 10.1039C22.75 10.6696 22.75 11.2818 22.75 11.9436V13C22.75 13.4142 22.4142 13.75 22 13.75C21.5858 13.75 21.25 13.4142 21.25 13V12C21.25 11.5541 21.2499 11.1384 21.248 10.75H2.75199C2.75009 11.1384 2.75 11.5541 2.75 12C2.75 13.9068 2.75159 15.2615 2.88976 16.2892C3.02502 17.2952 3.27869 17.8749 3.7019 18.2981C4.12511 18.7213 4.70476 18.975 5.71085 19.1102C6.73851 19.2484 8.09318 19.25 10 19.25H13C13.4142 19.25 13.75 19.5858 13.75 20C13.75 20.4142 13.4142 20.75 13 20.75H9.94359C8.10583 20.75 6.65019 20.75 5.51098 20.5969C4.33856 20.4392 3.38961 20.1071 2.64124 19.3588C1.89288 18.6104 1.56076 17.6614 1.40314 16.489C1.24997 15.3498 1.24998 13.8942 1.25 12.0564V11.9436C1.24999 11.2818 1.24999 10.6696 1.25714 10.1039C1.25243 10.0699 1.25 10.0352 1.25 10C1.25 9.95716 1.25359 9.91517 1.26049 9.87429C1.27564 8.96711 1.31267 8.18385 1.40314 7.51098C1.56076 6.33856 1.89288 5.38961 2.64124 4.64124C3.38961 3.89288 4.33856 3.56076 5.51098 3.40314C6.65019 3.24997 8.10582 3.24998 9.94358 3.25ZM2.77607 9.25H21.2239C21.2044 8.66327 21.1701 8.15634 21.1102 7.71085C20.975 6.70476 20.7213 6.12511 20.2981 5.7019C19.8749 5.27869 19.2952 5.02502 18.2892 4.88976C17.2615 4.75159 15.9068 4.75 14 4.75H10C8.09318 4.75 6.73851 4.75159 5.71085 4.88976C4.70476 5.02502 4.12511 5.27869 3.7019 5.7019C3.27869 6.12511 3.02502 6.70476 2.88976 7.71085C2.82987 8.15634 2.79564 8.66327 2.77607 9.25ZM18 14.75C16.7574 14.75 15.75 15.7574 15.75 17C15.75 18.2426 16.7574 19.25 18 19.25C19.2426 19.25 20.25 18.2426 20.25 17C20.25 15.7574 19.2426 14.75 18 14.75ZM14.25 17C14.25 14.9289 15.9289 13.25 18 13.25C20.0711 13.25 21.75 14.9289 21.75 17C21.75 17.7643 21.5213 18.4752 21.1287 19.068L22.0303 19.9697C22.3232 20.2626 22.3232 20.7374 22.0303 21.0303C21.7374 21.3232 21.2626 21.3232 20.9697 21.0303L20.068 20.1287C19.4752 20.5213 18.7643 20.75 18 20.75C15.9289 20.75 14.25 19.0711 14.25 17ZM5.25 16C5.25 15.5858 5.58579 15.25 6 15.25H10C10.4142 15.25 10.75 15.5858 10.75 16C10.75 16.4142 10.4142 16.75 10 16.75H6C5.58579 16.75 5.25 16.4142 5.25 16Z"
              fill="#1C274C"
            />
          </svg>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">4.3</div>
          <p className="text-xs text-muted-foreground"></p>
        </CardContent>
      </Card>
    </div>
  );
}
