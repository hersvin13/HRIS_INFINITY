import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root"); // Set the root element

function Notifications({ isOpen, handleClose }) {
  const customStyles = {
    content: {
      width: "20%",
      height: "30%",
      top: "50%",
      left: "50%",
      transform: "translate(100%, -140%)",
      background: "white",
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      contentLabel="Example Modal"
      style={customStyles}>
      <h2>Modal Content</h2>
      <button onClick={handleClose}>Close</button>
    </Modal>
  );
}

export default Notifications;
