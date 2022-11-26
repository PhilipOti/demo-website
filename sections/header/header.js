import React, { useState, useEffect } from "react";
import Image from "next/image";
import headerStyles from "./header.module.css";
import {
  AiOutlineSearch,
  AiOutlineMenu,
  AiOutlinePhone,
  AiOutlineMail,
} from "react-icons/ai";
import Link from "next/link";

//component imports
import Logo from "../../components/logo/logo";
import CustomButton from "../../components/customButton/customButton";
import CustomDrawer from "../../components/customDrawer/customDrawerLeft";
import { navBarData } from "../../utils/drawerData";
import { socialsData } from "../../utils/generalData";

function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleHandler = () => {
    setIsDrawerOpen((prevState) => !prevState);
  };

  return (
    <>
      <header
        style={{
          position: "sticky",
          top: "0",
          width: "100",
          backgroundColor: "#fff",
          zIndex: "100",
        }}
      >
        <div
          className={`container d-flex justify-content-between ${headerStyles.nav_container}`}
        >
          <div>
            <Logo></Logo>
          </div>
          <div className={`${headerStyles.navbar}`}>
            <ul className={`list-inline`}>
              {navBarData.map((item, index) => {
                return (
                  <li
                    className={`list-inline-item ${headerStyles.list_item}`}
                    key={index}
                  >
                    <Link href={item.path}>
                      <a>{item.title}</a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="d-none d-lg-block">
            <a href="#signupform">
              <button
                type="button"
                className={`btn btn-outline-warning ${headerStyles.btn}`}
              >
                Get in Touch
              </button>
            </a>

            {/* <CustomButton buttonText="Get in Touch"></CustomButton> */}
          </div>
          <div className={`d-lg-none ${headerStyles.menu_container}`}>
            <AiOutlineSearch className={`${headerStyles.search_icon}`} />
            <AiOutlineMenu
              onClick={toggleHandler}
              className={`${headerStyles.menu_icon}`}
            />
          </div>
        </div>
      </header>
      <div>
        <CustomDrawer
          toggleNav={toggleHandler}
          isOpen={isDrawerOpen}
          setIsOpen={setIsDrawerOpen}
        >
          <ul className={`list-inline d-flex flex-column`}>
            {navBarData.map((item, index) => {
              return (
                <li
                  key={index}
                  onClick={toggleHandler}
                  className={`list-inline-item text-center py-3 ${headerStyles.drawer_list_item}`}
                  // style={{ marginTop: "1rem", borderBottom: "solid 1px" }}
                >
                  <Link href={item.path}>
                    <a>
                      <strong>{item.title}</strong>
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="d-flex justify-content-center">
            {socialsData.map((item, index) => {
              return (
                <Link key={index} href={item.path}>
                  <a className={`${headerStyles.socialIcon}`}>{item.icon}</a>
                </Link>
              );
            })}
          </div>
          <div className={headerStyles.drawer_footer}>
            <p className={`text-center`}>All rights reserved &copy;2022</p>
          </div>
        </CustomDrawer>
      </div>
    </>
  );
}

export default Header;
