import React, { useState } from "react";
import "../styles/company-code.css";
import {
  MagnifyingGlass,
  Sliders,
  Eye,
  NotePencil,
  Trash,
} from "@phosphor-icons/react";

import AddNewCompanyCode from "./modal/company-code-modal/add-company-code";
import ViewCompanyCode from "./modal/company-code-modal/view-company-code";
import UpdateCompanyCode from "./modal/company-code-modal/update-company-code";

const CompanyCode = () => {
  //add modal
  const [addModal, setAddModal] = useState();
  const addCompanyCode = () => {
    setAddModal(!addModal);
  };

  // view modal
  const [viewModal, setViewModal] = useState();
  const viewCompanyCode = () => {
    setViewModal(!viewModal);
  };

  // update modal
  const [updateModal, setUpdateModal] = useState();
  const updateCompanyCode = () => {
    setUpdateModal(!updateModal);
  };

  return (
    <>
      <div className="company-code">
        <div className="company-code-header">
          <div className="company-code-title">COMPANY CODE</div>
          <div className="add-company-code">
            <button
              type="submit"
              onClick={addCompanyCode}>
              + Add Company Code
            </button>
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
              <tr>
                <td>COMPANY CODE</td>
                <td>TOTAL EMPLOYEE</td>
                <td>ACTION</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>COMPANY CODE</td>
                <td>TOTAL EMPLOYEE</td>
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
      {addModal && <AddNewCompanyCode toggleModal={addCompanyCode} />}
      {viewModal && <ViewCompanyCode toggleModal={viewCompanyCode} />}
      {updateModal && <UpdateCompanyCode toggleModal={updateCompanyCode} />}
    </>
  );
};

export default CompanyCode;
