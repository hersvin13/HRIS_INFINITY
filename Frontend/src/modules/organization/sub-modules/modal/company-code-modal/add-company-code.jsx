import React from "react";

const AddNewCompanyCode = ({ toggleModal }) => {
  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <h2>New Company Code</h2>
          <form>
            <label htmlFor="positionName">Company Code</label>
            <input
              type="text"
              id="positionName"
            />
            <button type="submit">Add Company Code</button>
          </form>
          <button onClick={toggleModal}>Close</button>
        </div>
      </div>
    </>
  );
};

export default AddNewCompanyCode;
