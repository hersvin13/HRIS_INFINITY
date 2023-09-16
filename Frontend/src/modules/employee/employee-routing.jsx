import React from "react";
import { Routes, Route } from "react-router-dom";

import EmployeeList from "./sub-modules/employee-list";
import EmployeeRequest from "./sub-modules/employee-request";

const EmployeeRouting = () => {
  return (
    <Routes>
      <Route
        path="/employee/employee-list"
        element={<EmployeeList />}
      />
      <Route
        path="/employee/employee-request"
        element={<EmployeeRequest />}
      />
    </Routes>
  );
};

export default EmployeeRouting;
