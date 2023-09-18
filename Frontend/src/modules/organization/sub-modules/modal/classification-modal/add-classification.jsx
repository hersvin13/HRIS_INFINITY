import React from "react";

const AddNewClassifications = ({ toggleModal }) => {
  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <h2>New Classification</h2>
          <form>
            <label htmlFor="positionName">Classification Name:</label>
            <input
              type="text"
              id="positionName"
            />
            <button type="submit">Add Classification</button>
          </form>
          <button onClick={toggleModal}>Close</button>
        </div>
      </div>
    </>
  );
};

export default AddNewClassifications;
