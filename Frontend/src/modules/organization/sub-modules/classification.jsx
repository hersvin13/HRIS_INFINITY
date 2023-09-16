import React from "react";
import "../styles/classification.css";
import { MagnifyingGlass, Sliders } from "@phosphor-icons/react";

const Classification = () => {
  return (
    <>
      <div className="classification">
        <div className="classification-header">
          <div className="classification-title">CLASSIFICATION</div>
          <div className="add-classification">
            <button type="submit">+ Add New Classification</button>
          </div>
        </div>
        <div className="classification-filter">
          <div className="select-classification">
            <label htmlFor="">Department</label>
            <select
              name=""
              id="">
              <option value="">Select Department</option>
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
        <div className="classification-search">
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
        <div className="classification-table">
          <table>
            <thead>
              <ul>
                <li>EMPLOYMENT CLASSIFICATION</li>
                <li>DESIGNATION</li>
                <li>ACTION</li>
              </ul>
            </thead>
            <tbody>
              <ul>
                <li>EMPLOYMENT CLASSIFICATION</li>
                <li>DESIGNATION</li>
                <li>ACTION</li>
              </ul>
            </tbody>
          </table>
        </div>
        <div className="classification-pagination">
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

export default Classification;
