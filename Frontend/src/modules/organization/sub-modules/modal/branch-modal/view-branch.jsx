import React from "react";

const ViewBranch = ({ toggleModal }) => {
  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <h2>View Branch</h2>
          <form>
            <label htmlFor="positionName">Position Name:</label>
            <input
              type="text"
              id="positionName"
            />
            <button type="submit">Add Position</button>
          </form>
          <button onClick={toggleModal}>Close</button>
        </div>
      </div>
    </>
  );
};

export default ViewBranch;
