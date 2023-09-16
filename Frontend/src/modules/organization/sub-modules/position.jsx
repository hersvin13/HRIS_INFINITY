import React, { useState } from "react";
import "../styles/position.css";
import {
  MagnifyingGlass,
  Sliders,
  Eye,
  NotePencil,
  Trash,
} from "@phosphor-icons/react";
import AddNewPosition from "./modal/add-new-position";

const Position = () => {
  const [selectedPosition, setSelectedPosition] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const [positions] = useState([
    { position: "Front End Developer", totalEmp: "20" },
    { position: "Back End Developer", totalEmp: "30" },
    { position: "Full Stack Developer", totalEmp: "50" },
  ]);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredPositions = positions.filter((positions) => {
    const matchesSelectedPositions =
      !selectedPosition || positions.position === selectedPosition;
    const matchesSearchQuery =
      positions.position &&
      positions.position.toLowerCase().includes(searchQuery.toLowerCase());
    //     ||
    //   (positions.email &&
    //     positions.email.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesSelectedPositions && matchesSearchQuery;
  });

  const handleSelectChange = (e) => {
    setSelectedPosition(e.target.value);
  };

  const filteredEntries = filteredPositions.length;

  const numberOfEntries = positions.length;

  const handleClearFilters = () => {
    setSelectedPosition("");
    setSearchQuery("");
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className="position">
        <div className="position-header">
          <div className="position-title">POSITION</div>
          <div className="add-position">
            <button
              type="submit"
              onClick={toggleModal}>
              + Add New Position
            </button>
          </div>
        </div>
        <div className="position-filter">
          <div className="select-position">
            <label htmlFor="">Position</label>
            <select
              name="branchSelect"
              id="branchSelect"
              value={selectedPosition}
              onChange={handleSelectChange}>
              <option value="">Select Position</option>
              {positions.map((positions, index) => (
                <option
                  key={index}
                  value={positions.position}>
                  {positions.position}
                </option>
              ))}
            </select>
          </div>
          <button
            type="button"
            className="filter">
            {/* onClick={handleApplyFilter}> */}
            Apply Filter
          </button>
          <button
            type="button"
            className="clear"
            onClick={handleClearFilters}>
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
              value={searchQuery}
              onChange={handleInputChange}
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
              {filteredPositions.map((positions, index) => (
                <tr key={index}>
                  <td>{positions.position}</td>
                  <td>{positions.totalEmp}</td>
                  <td className="action">
                    <div className="view">
                      <Eye />
                    </div>
                    <div className="edit">
                      <NotePencil />
                    </div>
                    <div className="delete">
                      <Trash />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="position-pagination">
          <div className="show">
            Showing {filteredEntries} out of {numberOfEntries} Entries
          </div>
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
      {isModalOpen && <AddNewPosition toggleModal={toggleModal} />}
    </>
  );
};

export default Position;
