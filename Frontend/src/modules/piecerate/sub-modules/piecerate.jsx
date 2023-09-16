import React from "react";
import "../styles/piecerate.css";
import {
  DownloadSimple,
  MagnifyingGlass,
  Sliders,
  UploadSimple,
} from "@phosphor-icons/react";

const PieceRate = () => {
  return (
    <>
      <div className="piecerate">
        <div className="piecerate-header">
          <div className="piecerate-title">PIECE RATE</div>
          <div className="buttons">
            <div className="import">
              <DownloadSimple
                color="#614ed2"
                size={20}
              />
              <button type="submit">Import</button>
            </div>
            <div className="export">
              <UploadSimple
                color="#fff"
                size={20}
              />
              <button type="submit">Export</button>
            </div>
            <div className="add-unit">
              <button type="submit">+ Add Unit Piece</button>
            </div>
          </div>
        </div>
        <div className="piecerate-filter">
          <div className="select-piecerate">
            <label htmlFor="">Unit Type</label>
            <select
              name=""
              id="">
              <option value="">Select Unit Type</option>
            </select>
          </div>
          <div className="select-piecerate">
            <label htmlFor="">Unit Quantity</label>
            <select
              name=""
              id="">
              <option value="">Select Unit Quantity</option>
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
        <div className="piecerate-search">
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
        <div className="piecerate-table">
          <table>
            <thead>
              <ul>
                <li>UNIT TYPE</li>
                <li>UNIT QUANTITY</li>
                <li>QUANTITY RATE</li>
                <li>ACTION</li>
              </ul>
            </thead>
            <tbody>
              <ul>
                <li>UNIT TYPE</li>
                <li>UNIT QUANTITY</li>
                <li>QUANTITY RATE</li>
                <li>ACTION</li>
              </ul>
            </tbody>
          </table>
        </div>
        <div className="piecerate-pagination">
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

export default PieceRate;
