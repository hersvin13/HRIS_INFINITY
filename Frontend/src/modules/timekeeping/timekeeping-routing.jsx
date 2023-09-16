import React from "react";
import { Routes, Route } from "react-router-dom";

import Attendance from "./sub-modules/attendance";
import Calendar from "./sub-modules/calendar";
import DailyTimeRecords from "./sub-modules/daily-time-records";
import DTRCorrection from "./sub-modules/DTR-correction";
import LeaveCredits from "./sub-modules/leave-credits";
import LeaveRequest from "./sub-modules/leave-request";
import Schedule from "./sub-modules/schedule";

const TimekeepingRouting = () => {
  return (
    <Routes>
      <Route
        path="/timekeeping/attendance"
        element={<Attendance />}
      />
      <Route
        path="/timekeeping/calendar"
        element={<Calendar />}
      />
      <Route
        path="/timekeeping/daily-time-records"
        element={<DailyTimeRecords />}
      />
      <Route
        path="timekeeping/dtr-correction"
        element={<DTRCorrection />}
      />
      <Route
        path="timekeeping/leave-credits"
        element={<LeaveCredits />}
      />
      <Route
        path="timekeeping/leave-request"
        element={<LeaveRequest />}
      />
      <Route
        path="timekeeping/schedule"
        element={<Schedule />}
      />
    </Routes>
  );
};

export default TimekeepingRouting;
