import React from "react";
import { Routes, Route } from "react-router-dom";

import Attendance from "./sub-modules/attendance";
import Payroll from "./sub-modules/payroll";

const ReportsRouting = () => {
  return (
    <Routes>
      <Route
        path="/reports/attendance"
        element={<Attendance />}
      />
      <Route
        path="/reports/payroll"
        element={<Payroll />}
      />
    </Routes>
  );
};

export default ReportsRouting;
