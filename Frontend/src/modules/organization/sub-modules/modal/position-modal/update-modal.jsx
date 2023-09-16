import React from "react";

const UpdatePositions = ({ toggleModal }) => {
  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <h2>Update Position</h2>
          {/* Your form and input fields go here */}
          <button onClick={toggleModal}>Close</button>
        </div>
      </div>
    </>
  );
};

export default UpdatePositions;
