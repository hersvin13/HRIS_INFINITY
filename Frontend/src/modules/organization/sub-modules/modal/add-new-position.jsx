import React from "react";
import "./styles/add-new-branch.css";

const AddNewPosition = ({ toggleModal }) => {
  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <h2>Add New Position</h2>
          {/* Your form and input fields go here */}
          <button onClick={toggleModal}>Close</button>
        </div>
      </div>
    </>
  );
};

export default AddNewPosition;
