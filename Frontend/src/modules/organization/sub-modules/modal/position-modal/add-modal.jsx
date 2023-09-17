import React from "react";
import "./styles/add-modal.css";

const AddNewPositions = ({ toggleModal }) => {
  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <h2>New Position</h2>
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

export default AddNewPositions;
