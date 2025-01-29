import React, { useState } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "../../../src/index.css";
import AttendanceMarking from "./Admin/Attendance";

const AttendanceGraph = () => {
  const [data, setData] = useState([
    { date: "2023-01-01", attendance: "present" },
    { date: "2023-01-02", attendance: "present" },
    { date: "2023-01-03", attendance: "present" },
    { date: "2023-01-04", attendance: "present" },
    { date: "2023-01-05", attendance: "present" },
    { date: "2025-01-06", attendance: "present" },
    { date: "2025-01-07", attendance: "present" },
    { date: "2025-01-08", attendance: "present" },
    { date: "2025-01-09", attendance: "present" },
    { date: "2025-01-10", attendance: "present" },
    { date: "2025-01-11", attendance: "present" },
    { date: "2025-01-12", attendance: "present" },
    { date: "2025-01-13", attendance: "present" },
    { date: "2025-01-27", attendance: "present" },
  ]);
  const [isOpen, setIsOpen]=useState(false);
  const today = new Date();

  // Find the earliest date in the data
  const earliestDate = new Date(
    Math.min(...data.map((entry) => new Date(entry.date).getTime()))
  );

  return (
    <div className="p-6">
      <button className="bg-blue-700 rounded-lg p-4 text-white" onClick={()=>{setIsOpen(!isOpen)}}>Attendance Marking</button>
      {isOpen&&(
       < AttendanceMarking/>
      )}<h2 className="text-2xl font-bold mb-6 text-center">Attendance Overview</h2>
      <div className="overflow-x-auto border border-gray-300 rounded-lg p-4">
        <div className="min-w-[1200px] mx-auto">
          <CalendarHeatmap
            startDate={earliestDate} // Dynamically set the start date
            endDate={today} // Today
            values={data}
            classForValue={(value) => {
              if (!value) {
                return "color-empty";
              }
              return value.attendance === "present"
                ? "color-present"
                : "color-absent";
            }}
            tooltipDataAttrs={(value) => {
              if (!value || !value.date) {
                return { "data-tip": "No data" };
              }
              return {
                "data-tip": `${value.date}: ${value.attendance}`,
              };
            }}
            showWeekdayLabels
          />
        </div>
      </div>
    </div>
  );
};

export default AttendanceGraph;
