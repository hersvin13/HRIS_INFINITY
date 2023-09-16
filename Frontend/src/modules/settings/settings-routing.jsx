import React from "react";
import { Routes, Route } from "react-router-dom";

import GeneralSettings from "./sub-modules/general-settings";

const SettingsRouting = () => {
  return (
    <Routes>
      <Route
        path="/settings/general-settings"
        element={<GeneralSettings />}
      />
    </Routes>
  );
};

export default SettingsRouting;
