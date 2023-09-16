import React from "react";
import "./styles/add-modal.css";

const AddNewPositions = ({ toggleModal }) => {
  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <h2>New Positions</h2>
          {/* Your form and input fields go here */}
          <button onClick={toggleModal}>Close</button>
        </div>
      </div>
    </>
  );
};

export default AddNewPositions;
