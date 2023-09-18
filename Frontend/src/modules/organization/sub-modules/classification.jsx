import React, { useState } from "react";
import "../styles/classification.css";
import {
  MagnifyingGlass,
  Sliders,
  Eye,
  NotePencil,
  Trash,
} from "@phosphor-icons/react";

import AddNewClassification from "./modal/classification-modal/add-classification";
import ViewClassification from "./modal/classification-modal/view-classification";
import UpdateClassification from "./modal/classification-modal/update-classification";

const Classification = () => {
  //add modal
  const [addModal, setAddModal] = useState();
  const addClassification = () => {
    setAddModal(!addModal);
  };

  // view modal
  const [viewModal, setViewModal] = useState();
  const viewClassification = () => {
    setViewModal(!viewModal);
  };

  // update modal
  const [updateModal, setUpdateModal] = useState();
  const updateClassification = () => {
    setUpdateModal(!updateModal);
  };
  return (
    <>
      <div className="classification">
        <div className="classification-header">
          <div className="classification-title">CLASSIFICATION</div>
          <div className="add-classification">
            <button
              type="submit"
              onClick={addClassification}>
              + Add New Classification
            </button>
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
              <tr>
                <td>EMPLOYMENT CLASSIFICATION</td>
                <td>DESIGNATION</td>
                <td>ACTION</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>EMPLOYMENT CLASSIFICATION</td>
                <td>DESIGNATION</td>
                <td className="action">
                  <div className="view">
                    {/* View Branch Employees */}
                    <button
                      onClick={() => {
                        // fetchBranchEmployees(branch.branchId);
                        // showView();
                      }}>
                      <Eye />
                    </button>
                  </div>
                  <div className="edit">
                    {/* Update Branch */}
                    <button
                      onClick={() => {
                        // fetchCurrentBranch(branch.branchId);
                        // openUpdateModal();
                      }}>
                      <NotePencil />
                    </button>
                  </div>
                  <div className="delete">
                    {/* Delete Branch */}
                    <button
                      onClick={() => {
                        // console.log(branch.branchId);
                        // handleDelete(branch.branchId);
                      }}>
                      <Trash />
                    </button>
                  </div>
                </td>
              </tr>
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
      {addModal && <AddNewClassification toggleModal={addClassification} />}
      {viewModal && <ViewClassification toggleModal={viewClassification} />}
      {updateModal && (
        <UpdateClassification toggleModal={updateClassification} />
      )}
    </>
  );
};

export default Classification;
