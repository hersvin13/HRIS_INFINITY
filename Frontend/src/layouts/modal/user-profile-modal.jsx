import React from "react";
import "./styles/user-profile-modal.css";

function UserProfile({ isOpen, handleClose }) {
  return (
    <div className="user-settings-modal">
      <div className="modal-content">
        <div>Menu Item 1</div>
        <div>Menu Item 2</div>
        <div>Menu Item 3</div>
      </div>
    </div>
  );
}

export default UserProfile;
