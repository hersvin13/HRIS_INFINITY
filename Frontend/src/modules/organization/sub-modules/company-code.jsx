import React from "react";
import "../styles/company-code.css";
import { MagnifyingGlass, Sliders } from "@phosphor-icons/react";

const CompanyCode = () => {
  return (
    <>
      <div className="company-code">
        <div className="company-code-header">
          <div className="company-code-title">COMPANY CODE</div>
          <div className="add-company-code">
            <button type="submit">+ Add Company Code</button>
          </div>
        </div>
        <div className="company-code-filter">
          <div className="select-company-code">
            <label htmlFor="">Company Code</label>
            <select
              name=""
              id="">
              <option value="">Select Company Code</option>
            </select>
          </div>
          <button
            type="submit"
            className="filter">
            Apply Filter
          </button>
          <button
            type="submit"
            className="clear">
            Clear Filters
          </button>
        </div>
        <div className="company-code-search">
          <div className="table-page">
            <label htmlFor="">Show</label>
            <input
              className="show"
              type="number"
              placeholder="0"
            />
          </div>
          <div className="search">
            <div className="search-people">
              <MagnifyingGlass size={30} />
            </div>

            <input
              type="text"
              placeholder="Search"
            />
            <div className="search-settings">
              <Sliders size={30} />
            </div>
          </div>
        </div>
        <div className="company-code-table">
          <table>
            <thead>
              <ul>
                <li>COMPANY CODE</li>
                <li>TOTAL EMPLOYEE</li>
                <li>ACTION</li>
              </ul>
            </thead>
            <tbody>
              <ul>
                <li>COMPANY CODE</li>
                <li>TOTAL EMPLOYEE</li>
                <li>ACTION</li>
              </ul>
            </tbody>
          </table>
        </div>
        <div className="company-code-pagination">
          <div className="show">Showing ? out of ? Entries</div>
          <div className="page">
            <button
              className="prev"
              type="submit">
              Previous
            </button>
            <button
              className="number-page"
              type="submit">
              1
            </button>
            <button
              className="next"
              type="submit">
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyCode;
