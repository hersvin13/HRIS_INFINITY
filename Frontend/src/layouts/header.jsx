import React, { useState } from "react";
import "./styles/header.css";
import Logo from "../assets/logo.png";
import { BiBell } from "react-icons/bi";
import { FaRegUserCircle } from "react-icons/fa";
import { BsChevronDown } from "react-icons/bs";
import { Link } from "react-router-dom";
import Notifications from "./modal/notifbell-modal";

const Header = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <div className="header">
        <div className="logo">
          <Link to="/">
            <img
              src={Logo}
              className="app-logo"
              alt="logo"
            />
          </Link>
          <h1>HRIS</h1>
        </div>
        <div className="user">
          <button
            className="notif-bell"
            onClick={openModal}>
            <BiBell
              color="white"
              size="30px"
            />
          </button>
          <div className="user-profile">
            <div className="user-icon">
              <FaRegUserCircle
                color="white"
                size="30px"
              />
            </div>
            <div className="user-name">
              <label
                className="name"
                htmlFor="">
                Juan Dela Cruz
              </label>
              <label
                className="user-type"
                htmlFor="">
                Administrator
              </label>
            </div>
            <div className="user-settings">
              <BsChevronDown
                color="white"
                size="20px"
              />
            </div>
          </div>
        </div>
      </div>
      <Notifications
        isOpen={modalIsOpen}
        handleClose={closeModal}
      />
    </>
  );
};

export default Header;
