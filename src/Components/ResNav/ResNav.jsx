import React, { useState } from "react";
import "./ResNav.css";
import { LuSquareMenu } from "react-icons/lu";
import { Link } from "react-router-dom";
import { FiPhone } from "react-icons/fi";

const ResNav = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <section className="resNav">
        <div className="resIcon">
          <LuSquareMenu
            onClick={() => setShow(!show)}
            className="w-[60px] h-[40px]"
          />
        </div>
        {show && (
          <div className="resMenu">
            <div className="res_nav_content">
              <div className="res_nav_service_part">
                <Link to={""}>Our Services</Link>
              </div>
              <div className="res_nav_menu_part">
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
              <div className="res_nav_account_part">
                <div>
                  <Link to={""}>Account</Link>
                </div>

                <div className="res_no_icon_dev flex gap-[6px] items-center">
                  <FiPhone className="text-white" />
                  <p>+2349067322844</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default ResNav;
