import React from "react";
import { Routes, Route } from "react-router-dom";

import Branch from "./sub-modules/branch";
import Department from "./sub-modules/department";
import Position from "./sub-modules/position";
import Classification from "./sub-modules/classification";
import CompanyCode from "./sub-modules/company-code";

const OrganizationRouting = () => {
  return (
    <Routes>
      <Route
        path="/organization/branch"
        element={<Branch />}
      />
      <Route
        path="/organization/department"
        element={<Department />}
      />
      <Route
        path="/organization/position"
        element={<Position />}
      />
      <Route
        path="/organization/classification"
        element={<Classification />}
      />
      <Route
        path="/organization/company-code"
        element={<CompanyCode />}
      />
    </Routes>
  );
};

export default OrganizationRouting;
