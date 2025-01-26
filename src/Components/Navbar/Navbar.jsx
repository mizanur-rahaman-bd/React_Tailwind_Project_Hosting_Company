import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FiPhone } from "react-icons/fi";
import ResNav from "../ResNav/ResNav";

const Navbar = () => {
  return (
    <>
      <nav className="nav">
        <div className="container">
          <div className="navrow">
            <div className="nav_logo">
              <img src="Images/logo_img.png" alt="logo" />
            </div>
            <div className="nav_without_logo">
              <div className="nav_content">
                <div className="nav_service_part">
                  <Link to={""}>Our Services</Link>
                </div>
                <div className="nav_menu_part">
                  <ul>
                    <li>
                      <Link to={""}>About</Link>
                    </li>
                    <li>
                      <Link to={""}>Blog&News</Link>
                    </li>
                    <li>
                      <Link to={""}>Contact</Link>
                    </li>
                  </ul>
                </div>
                <div className="nav_account_part">
                  <div>
                    <Link to={""}>Account</Link>
                  </div>
                  <div>
                    <span className="w-[1px] h-[9px] bg-[#DAD8D8] block"></span>
                  </div>
                  <div className="flex gap-[6px] items-center">
                    <FiPhone className="text-[#B00000]" />
                    <p>+2349067322844</p>
                  </div>
                </div>
              </div>
            </div>
            <ResNav />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
