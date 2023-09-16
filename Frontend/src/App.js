import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./layouts/header";
import Sidebar from "./layouts/sidebar";

import Dashboard from "./modules/dashboard";

import "./App.css";
import TimekeepingRouting from "./modules/timekeeping/timekeeping-routing";
import PayrollRouting from "./modules/payroll/payroll-routing";
import EmployeeRouting from "./modules/employee/employee-routing";
import ReportsRouting from "./modules/reports/reports-routing";
import OrganizationRouting from "./modules/organization/organization-routing";
import PiecerateRouting from "./modules/piecerate/piecerate-routing";
import SettingsRouting from "./modules/settings/settings-routing";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="container">
          <Sidebar />

          <Routes>
            <Route
              path="/"
              element={<Dashboard />}
            />
            <Route
              path="/timekeeping/attendance"
              element={<TimekeepingRouting />}
            />
            <Route
              path="/payroll/loan-management"
              element={<PayrollRouting />}
            />
            <Route
              path="/employee/employee-list"
              element={<EmployeeRouting />}
            />
            <Route
              path="/reports/attendance"
              element={<ReportsRouting />}
            />
            <Route
              path="/organization/branch"
              element={<OrganizationRouting />}
            />{" "}
            <Route
              path="/piece-rate/piece-rate"
              element={<PiecerateRouting />}
            />
            <Route
              path="/settings/general-settings"
              element={<SettingsRouting />}
            />
          </Routes>
          <TimekeepingRouting />
          <PayrollRouting />
          <EmployeeRouting />
          <ReportsRouting />
          <OrganizationRouting />
          <PiecerateRouting />
          <SettingsRouting />
        </div>
      </div>
    </Router>
  );
}

export default App;
