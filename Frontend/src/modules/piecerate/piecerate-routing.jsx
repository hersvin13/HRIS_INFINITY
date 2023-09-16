import React from "react";
import { Routes, Route } from "react-router-dom";

import PieceRate from "./sub-modules/piecerate";
import SetWorkLoad from "./sub-modules/set-work-load";
import Payroll from "./sub-modules/payroll";
import CashAdvance from "./sub-modules/cash-advance";

const PiecerateRouting = () => {
  return (
    <Routes>
      <Route
        path="/piece-rate/piece-rate"
        element={<PieceRate />}
      />
      <Route
        path="/piece-rate/set-work-load"
        element={<SetWorkLoad />}
      />
      <Route
        path="/piece-rate/payroll"
        element={<Payroll />}
      />
      <Route
        path="/piece-rate/cash-advance"
        element={<CashAdvance />}
      />
    </Routes>
  );
};

export default PiecerateRouting;
