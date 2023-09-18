import React from "react";

const UpdateClassifications = ({ toggleModal }) => {
  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <h2>Update Classification</h2>
          <button onClick={toggleModal}>Close</button>
        </div>
      </div>
    </>
  );
};

export default UpdateClassifications;
