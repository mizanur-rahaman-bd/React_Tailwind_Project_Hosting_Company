import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <>
      <section className="banner">
        <div className="container">
          <div className="banner_row">
            <div className="banner_text_part">
              <h1>Premium Web Hosting for Your Website</h1>
              <p>
                Blazing fast web hosting for individuals and businesses of all
                sizes backed by 24x7x365 Support.
              </p>
              <button className="mr-[24px]">Create an Account</button>
              <button>Choose your plan</button>
            </div>
            <div className="banner_img_part">
              <img src="Images/banner_img.png" alt="banner" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
