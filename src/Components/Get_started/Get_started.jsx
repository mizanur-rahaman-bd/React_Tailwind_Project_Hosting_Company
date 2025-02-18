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
                <span className="font-poppin font-medium text-[10px] bg-[#FFE87A] p-[8px] rounded-[8px]">
                  20% discount
                </span>
              </div>
            </div>
          </div>
          <div className="get_statrted_span_part">
            <div className="basic_span w-[444px]">
              <h2>Basic</h2>
              <span className="w-[444px] h-[2px] bg-[#C4C4C4] block"></span>
            </div>
            <div className="premium_span w-[444px]">
              <h2>Premium</h2>
              <span className="w-[444px] h-[2px] bg-[#c4c4c4] block"></span>
            </div>
            <div className="span_card_row">
              <div className="span_card_inner_row">
                <div className="span_single_card">
                  <h3>Starter</h3>
                  <p>
                    with all your customers via all conversation channels in one
                    central dashboard.
                  </p>
                  <h4>$2.80</h4>
                  <h6>Per month</h6>
                  <button>Choose this Plan</button>
                  <ul>
                    <li>2GB SSD</li>
                    <li>10GB Bandwidth</li>
                    <li>15 Email Accounts</li>
                    <li>Unlimited Database</li>
                    <li>4 Subdomains</li>
                    <li>1 Parked Domain</li>
                    <li>2 Websites</li>
                    <li>Free SSL</li>
                    <li>Softaculous</li>
                  </ul>
                </div>
                <div className="span_single_card">
                  <h3>Starter</h3>
                  <p>
                    with all your customers via all conversation channels in one
                    central dashboard.
                  </p>
                  <h4>$2.80</h4>
                  <h6>Per month</h6>
                  <button>Choose this Plan</button>
                  <ul>
                    <li>2GB SSD</li>
                    <li>10GB Bandwidth</li>
                    <li>15 Email Accounts</li>
                    <li>Unlimited Database</li>
                    <li>4 Subdomains</li>
                    <li>1 Parked Domain</li>
                    <li>2 Websites</li>
                    <li>Free SSL</li>
                    <li>Softaculous</li>
                  </ul>
                </div>
                <div className="span_single_card">
                  <h3>Starter</h3>
                  <p>
                    with all your customers via all conversation channels in one
                    central dashboard.
                  </p>
                  <h4>$2.80</h4>
                  <h6>Per month</h6>
                  <button>Choose this Plan</button>
                  <ul>
                    <li>2GB SSD</li>
                    <li>10GB Bandwidth</li>
                    <li>15 Email Accounts</li>
                    <li>Unlimited Database</li>
                    <li>4 Subdomains</li>
                    <li>1 Parked Domain</li>
                    <li>2 Websites</li>
                    <li>Free SSL</li>
                    <li>Softaculous</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Get_started;
