import React from "react";
import { Routes, Route } from "react-router-dom";

import LoanManagement from "./sub-modules/loan-management";
import GeneratePayroll from "./sub-modules/generate-payroll";
import GeneratePayslip from "./sub-modules/generate-payslip";

const PayrollRouting = () => {
  return (
    <Routes>
      <Route
        path="/payroll/loan-management"
        element={<LoanManagement />}
      />
      <Route
        path="/payroll/generate-payroll"
        element={<GeneratePayroll />}
      />
      <Route
        path="/payroll/generate-payslip"
        element={<GeneratePayslip />}
      />
    </Routes>
  );
};

export default PayrollRouting;
