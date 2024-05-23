"use client";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const ICONS = {
  total_employees: (
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
  ),
  total_completed_courses: (
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
  ),
  average_employee_score: (
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
  ),
  in_progress_courses: (
    <svg
      fill="#000000"
      height="20px"
      width="20px"
      version="1.1"
      id="XMLID_103_"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <g id="in-progress">
        <g>
          <path
            d="M23,24H1v-2h2.4c-1.6-5,1.6-7,3.7-8.4C8,13,8.9,12.5,8.9,12S8,10.9,7.1,10.4C5,9,1.8,7.1,3.4,2H1V0h22v2h-2.4
       c1.6,5-1.6,7-3.7,8.4c-1,0.5-1.9,1.1-1.9,1.6s0.9,1.1,1.8,1.6c2.1,1.4,5.3,3.4,3.7,8.4H23V24z M5.6,22h12.8c1.6-4-0.5-5.3-2.6-6.7
       C14.4,14.5,13,13.6,13,12c0-1.6,1.4-2.5,2.8-3.3C17.9,7.3,20,6,18.4,2H5.6C4,6,6.1,7.3,8.2,8.7C9.6,9.5,11,10.4,11,12
       c0,1.6-1.4,2.5-2.8,3.3C6.1,16.7,4,18,5.6,22z"
          />
        </g>
        <g>
          <path d="M16.8,23H7c-0.3-1.5,0.2-2.4,2.3-4.3c0.8-0.7,1.8-1.5,2.7-2.8c1,1.2,2,2.1,2.7,2.8C16.8,20.7,17.3,21,16.8,23z" />
        </g>
        <g>
          <path d="M9.4,6c-0.7,1.3-0.7,1.3,0.9,2.1c0.5,0.2,1.1,0.5,1.6,0.9c0.5-0.4,1.2-0.7,1.6-0.9c1.7-0.8,1.7-0.8,1-2.1" />
        </g>
      </g>
    </svg>
  ),
  upcoming_courses: (
    <svg
      fill="#000000"
      height="18px"
      width="18px"
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <g>
        <g>
          <g>
            <path
              d="M128,85.333c14.114,0,25.6-11.486,25.6-25.6V25.6C153.6,11.486,142.114,0,128,0s-25.6,11.486-25.6,25.6v34.133
     C102.4,73.847,113.886,85.333,128,85.333z M119.467,25.6c0-4.702,3.831-8.533,8.533-8.533s8.533,3.831,8.533,8.533v34.133
     c0,4.702-3.831,8.533-8.533,8.533s-8.533-3.831-8.533-8.533V25.6z"
            />
            <path
              d="M8.533,85.333c4.71,0,8.533-3.823,8.533-8.533V59.733c0-12.442,13.158-25.6,25.6-25.6H76.8
     c4.71,0,8.533-3.823,8.533-8.533c0-4.71-3.823-8.533-8.533-8.533H42.667C20.736,17.067,0,37.803,0,59.733V76.8
     C0,81.51,3.823,85.333,8.533,85.333z"
            />
            <path
              d="M324.267,494.933h-281.6c-12.442,0-25.6-13.158-25.6-25.6V119.467h452.267c4.71,0,8.533-3.823,8.533-8.533
     s-3.823-8.533-8.533-8.533H8.533c-4.71,0-8.533,3.823-8.533,8.533v358.4C0,491.264,20.736,512,42.667,512h281.6
     c4.71,0,8.533-3.823,8.533-8.533S328.977,494.933,324.267,494.933z"
            />
            <path
              d="M469.333,315.733c4.71,0,8.533-3.823,8.533-8.533V145.067c0-4.71-3.823-8.533-8.533-8.533H42.667
     c-4.71,0-8.533,3.823-8.533,8.533v298.667c0,18.825,15.309,34.133,34.133,34.133H307.2c4.71,0,8.533-3.823,8.533-8.533
     s-3.823-8.533-8.533-8.533H68.267c-9.412,0-17.067-7.654-17.067-17.067V153.6h409.6v153.6
     C460.8,311.91,464.623,315.733,469.333,315.733z"
            />
            <path
              d="M469.333,17.067H435.2c-4.71,0-8.533,3.823-8.533,8.533c0,4.71,3.823,8.533,8.533,8.533h34.133
     c12.442,0,25.6,13.158,25.6,25.6v264.533c0,4.71,3.823,8.533,8.533,8.533s8.533-3.823,8.533-8.533V59.733
     C512,37.803,491.264,17.067,469.333,17.067z"
            />
            <path
              d="M298.667,85.333c14.114,0,25.6-11.486,25.6-25.6V25.6c0-14.114-11.486-25.6-25.6-25.6s-25.6,11.486-25.6,25.6v34.133
     C273.067,73.847,284.553,85.333,298.667,85.333z M290.133,25.6c0-4.702,3.831-8.533,8.533-8.533s8.533,3.831,8.533,8.533v34.133
     c0,4.702-3.831,8.533-8.533,8.533s-8.533-3.831-8.533-8.533V25.6z"
            />
            <path
              d="M238.933,196.267c0-4.71-3.823-8.533-8.533-8.533h-34.133c-4.71,0-8.533,3.823-8.533,8.533V230.4
     c0,4.71,3.823,8.533,8.533,8.533H230.4c4.71,0,8.533-3.823,8.533-8.533V196.267z M221.867,221.867H204.8V204.8h17.067V221.867z"
            />
            <path
              d="M384,85.333c14.114,0,25.6-11.486,25.6-25.6V25.6C409.6,11.486,398.114,0,384,0s-25.6,11.486-25.6,25.6v34.133
     C358.4,73.847,369.886,85.333,384,85.333z M375.467,25.6c0-4.702,3.831-8.533,8.533-8.533c4.702,0,8.533,3.831,8.533,8.533
     v34.133c0,4.702-3.831,8.533-8.533,8.533c-4.702,0-8.533-3.831-8.533-8.533V25.6z"
            />
            <path
              d="M213.333,85.333c14.114,0,25.6-11.486,25.6-25.6V25.6c0-14.114-11.486-25.6-25.6-25.6c-14.114,0-25.6,11.486-25.6,25.6
     v34.133C187.733,73.847,199.219,85.333,213.333,85.333z M204.8,25.6c0-4.702,3.831-8.533,8.533-8.533
     c4.702,0,8.533,3.831,8.533,8.533v34.133c0,4.702-3.831,8.533-8.533,8.533c-4.702,0-8.533-3.831-8.533-8.533V25.6z"
            />
            <path
              d="M418.133,324.267c-51.755,0-93.867,42.112-93.867,93.867S366.379,512,418.133,512S512,469.888,512,418.133
     S469.888,324.267,418.133,324.267z M418.133,494.933c-42.342,0-76.8-34.458-76.8-76.8s34.458-76.8,76.8-76.8
     s76.8,34.458,76.8,76.8S460.476,494.933,418.133,494.933z"
            />
            <path
              d="M324.267,196.267c0-4.71-3.823-8.533-8.533-8.533H281.6c-4.71,0-8.533,3.823-8.533,8.533V230.4
     c0,4.71,3.823,8.533,8.533,8.533h34.133c4.71,0,8.533-3.823,8.533-8.533V196.267z M307.2,221.867h-17.067V204.8H307.2V221.867z"
            />
            <path
              d="M238.933,281.6c0-4.71-3.823-8.533-8.533-8.533h-34.133c-4.71,0-8.533,3.823-8.533,8.533v34.133
     c0,4.71,3.823,8.533,8.533,8.533H230.4c4.71,0,8.533-3.823,8.533-8.533V281.6z M221.867,307.2H204.8v-17.067h17.067V307.2z"
            />
            <path
              d="M145.067,358.4h-34.133c-4.71,0-8.533,3.823-8.533,8.533v34.133c0,4.71,3.823,8.533,8.533,8.533h34.133
     c4.71,0,8.533-3.823,8.533-8.533v-34.133C153.6,362.223,149.777,358.4,145.067,358.4z M136.533,392.533h-17.067v-17.067h17.067
     V392.533z"
            />
            <path
              d="M230.4,358.4h-34.133c-4.71,0-8.533,3.823-8.533,8.533v34.133c0,4.71,3.823,8.533,8.533,8.533H230.4
     c4.71,0,8.533-3.823,8.533-8.533v-34.133C238.933,362.223,235.11,358.4,230.4,358.4z M221.867,392.533H204.8v-17.067h17.067
     V392.533z"
            />
            <path
              d="M153.6,281.6c0-4.71-3.823-8.533-8.533-8.533h-34.133c-4.71,0-8.533,3.823-8.533,8.533v34.133
     c0,4.71,3.823,8.533,8.533,8.533h34.133c4.71,0,8.533-3.823,8.533-8.533V281.6z M136.533,307.2h-17.067v-17.067h17.067V307.2z"
            />
            <path
              d="M426.667,409.6V384c0-4.71-3.823-8.533-8.533-8.533S409.6,379.29,409.6,384v34.133c0,4.71,3.823,8.533,8.533,8.533h51.2
     c4.71,0,8.533-3.823,8.533-8.533s-3.823-8.533-8.533-8.533H426.667z"
            />
            <path
              d="M409.6,196.267c0-4.71-3.823-8.533-8.533-8.533h-34.133c-4.71,0-8.533,3.823-8.533,8.533V230.4
     c0,4.71,3.823,8.533,8.533,8.533h34.133c4.71,0,8.533-3.823,8.533-8.533V196.267z M392.533,221.867h-17.067V204.8h17.067V221.867
     z"
            />
            <path
              d="M401.067,307.2c4.71,0,8.533-3.823,8.533-8.533V281.6c0-4.71-3.823-8.533-8.533-8.533h-34.133
     c-4.71,0-8.533,3.823-8.533,8.533v17.067c0,4.71,3.823,8.533,8.533,8.533s8.533-3.823,8.533-8.533v-8.533h17.067v8.533
     C392.533,303.377,396.356,307.2,401.067,307.2z"
            />
            <path
              d="M298.667,375.467c4.71,0,8.533-3.823,8.533-8.533s-3.823-8.533-8.533-8.533H281.6c-4.71,0-8.533,3.823-8.533,8.533
     v34.133c0,4.71,3.823,8.533,8.533,8.533h17.067c4.71,0,8.533-3.823,8.533-8.533s-3.823-8.533-8.533-8.533h-8.533v-17.067H298.667
     z"
            />
            <path
              d="M153.6,196.267c0-4.71-3.823-8.533-8.533-8.533h-34.133c-4.71,0-8.533,3.823-8.533,8.533V230.4
     c0,4.71,3.823,8.533,8.533,8.533h34.133c4.71,0,8.533-3.823,8.533-8.533V196.267z M136.533,221.867h-17.067V204.8h17.067V221.867
     z"
            />
            <path
              d="M324.267,315.733V281.6c0-4.71-3.823-8.533-8.533-8.533H281.6c-4.71,0-8.533,3.823-8.533,8.533v34.133
     c0,4.71,3.823,8.533,8.533,8.533h34.133C320.444,324.267,324.267,320.444,324.267,315.733z M307.2,307.2h-17.067v-17.067H307.2
     V307.2z"
            />
          </g>
        </g>
      </g>
    </svg>
  ),
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
