import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./styles/sidebar.css";
import {
  SquaresFour,
  Timer,
  Notepad,
  IdentificationCard,
  FileText,
  GridNine,
  Buildings,
  Gear,
  CaretRight,
  CaretUp,
} from "@phosphor-icons/react";

const Sidebar = ({ children }) => {
  const location = useLocation();
  const [activeSubMenu, setActiveSubMenu] = useState(false);
  const [activeSubSubMenu, setActiveSubSubMenu] = useState(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      //   if (activeSubMenu !== null && !event.target.closest(".subMenu  ")) {
      //     setActiveSubMenu(null);
      //   }
      //   if (activeSubSubMenu !== null && !event.target.closest(".subSub")) {
      //     setActiveSubSubMenu(null);
      //   }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeSubMenu, activeSubSubMenu]);

  const menuItem = [
    {
      path: "/dashboard",
      name: "DASHBOARD",
      icon: <SquaresFour />,
    },
    {
      path: "/timekeeping/attendance",
      name: "TIMEKEEPING",
      icon: <Timer />,
      subMenu: [
        { path: "/timekeeping/attendance", name: "ATTENDANCE" },
        { path: "/timekeeping/calendar", name: "CALENDAR" },
        { path: "/timekeeping/daily-time-records", name: "DAILY TIME RECORDS" },
        { path: "/timekeeping/dtr-correction", name: "DTR CORRECTION" },
        { path: "/timekeeping/leave-credits", name: "LEAVE CREDITS" },
        { path: "/timekeeping/leave-request", name: "LEAVE REQUEST" },
        { path: "/timekeeping/schedule", name: "SCHEDULE" },
      ],
    },
    {
      path: "/payroll/loan-management",
      name: "PAYROLL",
      icon: <Notepad />,
      subMenu: [
        { path: "/payroll/loan-management", name: "LOAN MANAGEMENT" },
        { path: "/payroll/generate-payroll", name: "GENERATE PAYROLL" },
        { path: "/payroll/generate-payslip", name: "GENERATE PAYSLIP" },
      ],
    },
    {
      path: "/employee/employee-list",
      name: "EMPLOYEES",
      icon: <IdentificationCard />,
      subMenu: [
        { path: "/employee/employee-list", name: "EMPLOYEE LIST" },
        { path: "/employee/employee-request", name: "EMPLOYEE REQUEST" },
      ],
    },
    {
      path: "/reports/attendance",
      name: "REPORTS",
      icon: <FileText />,
      subMenu: [
        { path: "/reports/attendance", name: "ATTENDANCE" },
        { path: "/reports/payroll", name: "PAYROLL" },
      ],
    },
    {
      path: "/organization/branch",
      name: "ORGANIZATION",
      icon: <Buildings />,
      subMenu: [
        { path: "/organization/branch", name: "BRANCH" },
        { path: "/organization/department", name: "DEPARTMENT" },
        { path: "/organization/position", name: "POSITION" },
        { path: "/organization/classification", name: "CLASSIFICATION" },
        { path: "/organization/company-code", name: "COMPANY CODE" },
      ],
    },
    {
      path: "/piece-rate/piece-rate",
      name: "PIECE RATE",
      icon: <GridNine />,
      subMenu: [
        { path: "/piece-rate/piece-rate", name: "PIECE RATE" },
        { path: "/piece-rate/set-work-load", name: "SET WORK LOAD" },
        { path: "/piece-rate/payroll", name: "PAYROLL" },
        { path: "/piece-rate/cash-advance", name: "CASH ADVANCE" },
      ],
    },
    {
      path: "/settings/general-settings",
      name: "SETTINGS",
      icon: <Gear />,
      subMenu: [
        { path: "/settings/general-settings", name: "GENERAL SETTINGS" },
      ],
    },
  ];

  return (
    <div className="sidebar">
      {menuItem.map((item, index) => (
        <NavLink
          key={index}
          to={item.path}
          className={`link ${location.pathname === item.path ? "main" : ""}`}>
          {/* Main Menu Item */}
          <div
            className={`menu ${activeSubMenu === index ? "inactive" : ""}`}
            onClick={() =>
              setActiveSubMenu(activeSubMenu === index ? null : index)
            }>
            <div className="icon">{item.icon}</div>
            <div className="name">{item.name}</div>
          </div>
          {index === 0 || index === 7 ? null : (
            <div className="downMenu">
              {activeSubMenu === index ? (
                <CaretUp size={25} />
              ) : (
                <CaretRight size={25} />
              )}
            </div>
          )}

          {/* Submenus */}
          {item.subMenu && activeSubMenu === index && (
            <div className="subMenu">
              {item.subMenu.map((subItem, subIndex) => (
                <NavLink
                  key={subIndex}
                  to={subItem.path}
                  className="link"
                  style={{ color: "white" }}>
                  <div
                    onClick={() =>
                      setActiveSubSubMenu(
                        activeSubSubMenu === subIndex ? null : subIndex
                      )
                    }>
                    <div
                      className={`subSub ${
                        activeSubSubMenu === subIndex ? "deactive" : ""
                      }`}>
                      <div className="subMenuName">{subItem.name}</div>
                    </div>
                  </div>
                </NavLink>
              ))}
            </div>
          )}
        </NavLink>
      ))}
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
