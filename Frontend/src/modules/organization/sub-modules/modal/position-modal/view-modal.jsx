import React from "react";

const ViewPositions = ({ toggleModal }) => {
  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <h2>View Position</h2>
          {/* Your form and input fields go here */}
          <button onClick={toggleModal}>Close</button>
        </div>
      </div>
    </>
  );
};

export default ViewPositions;
