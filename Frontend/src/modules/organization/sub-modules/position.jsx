import React, { useState } from "react";
import "../styles/position.css";
import {
  MagnifyingGlass,
  Sliders,
  Eye,
  NotePencil,
  Trash,
} from "@phosphor-icons/react";

import AddNewPositions from "./modal/position-modal/add-modal";
import ViewPositions from "./modal/position-modal/view-modal";
import UpdatePositions from "./modal/position-modal/update-modal";

const Position = () => {
  //add modal
  const [addModal, setAddModal] = useState();
  const addPositions = () => {
    setAddModal(!addModal);
  };

  // view modal
  const [viewModal, setViewModal] = useState();
  const viewPositions = () => {
    setViewModal(!viewModal);
  };

  // update modal
  const [updateModal, setUpdateModal] = useState();
  const updatePositions = () => {
    setUpdateModal(!updateModal);
  };
  return (
    <>
      <div className="position">
        <div className="position-header">
          <div className="position-title">POSITION</div>
          <div className="add-position">
            <button
              type="submit"
              onClick={addPositions}>
              + Add New Position
            </button>
          </div>
        </div>
        <div className="position-filter">
          <div className="select-position">
            <label htmlFor="">Position</label>
            <select
              name="branchSelect"
              id="branchSelect">
              <option value="">Select Position</option>
            </select>
          </div>
          <button
            type="button"
            className="filter">
            Apply Filter
          </button>
          <button
            type="button"
            className="clear">
            Clear Filters
          </button>
        </div>
        <div className="position-search">
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
        <div className="position-table">
          <table>
            <thead>
              <tr>
                <td>POSITION</td>
                <td>TOTAL EMPLOYEE</td>
                <td>ACTION</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="name"></td>
                <td></td>
                <td className="action">
                  <button
                    className="view"
                    onClick={viewPositions}>
                    <Eye />
                  </button>
                  <button
                    className="edit"
                    onClick={updatePositions}>
                    <NotePencil />
                  </button>
                  <div className="delete">
                    <Trash />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="position-pagination">
          <div className="show">Showing out of Entries</div>
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
      {addModal && <AddNewPositions toggleModal={addPositions} />}
      {viewModal && <ViewPositions toggleModal={viewPositions} />}
      {updateModal && <UpdatePositions toggleModal={updatePositions} />}
    </>
  );
};

export default Position;
