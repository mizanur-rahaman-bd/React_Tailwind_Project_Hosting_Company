import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FiPhone } from "react-icons/fi";

const Navbar = () => {
  return (
    <>
      <nav className="nav">
        <div className="container">
          <div className="navrow">
            <div className="nav_logo">
              <img src="Images/logo_img.png" alt="logo" />
            </div>
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
                <span></span>
              </div>
              <div>
                <FiPhone />
                <p>+2349067322844</p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
