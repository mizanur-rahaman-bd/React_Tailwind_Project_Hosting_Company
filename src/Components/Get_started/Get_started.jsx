import React from "react";
import "./Get_started.css";
import Toggle_switch from "../Toggle_switch/Toggle_switch";

const Get_started = () => {
  return (
    <>
      <section className="get_started">
        <div className="container">
          <div className="get_started_heading_part">
            <h2>Ready to get started with Lemon Wares?</h2>
            <p className="get_start_P">Choose the package that suits you</p>
            <div className="select_part">
              <div className="">
                <p>Monthly</p>
              </div>

              <div>
                <Toggle_switch />
              </div>
              <div className="">
                <p>Yearly</p>
              </div>
              <div className="">
                <p>20% discount</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Get_started;
