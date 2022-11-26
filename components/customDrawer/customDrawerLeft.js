import React, { useState, usEffect } from "react";
import customDrawerLeftStyles from "./customDrawerLeft.module.css";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import Link from "next/link";

function CustomDrawer({ isOpen, setIsOpen, toggleNav, children }) {
  return (
    <>
      <div
        id="mySidenav"
        className={`${
          isOpen
            ? customDrawerLeftStyles.sidenavOpen
            : customDrawerLeftStyles.sidenav
        }`}
      >
        <div
          className={`${customDrawerLeftStyles.closebtn} ${customDrawerLeftStyles.link_item}`}
          onClick={toggleNav}
        >
          <AiOutlineClose></AiOutlineClose>
        </div>
        {children}
      </div>
    </>
  );
}

export default CustomDrawer;
