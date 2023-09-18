import React from "react";

const ViewCompanyCode = ({ toggleModal }) => {
  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <h2>View Company Code</h2>
          <button onClick={toggleModal}>Close</button>
        </div>
      </div>
    </>
  );
};

export default ViewCompanyCode;
