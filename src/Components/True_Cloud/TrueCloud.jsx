import React from "react";
import "./TrueCloud.css";

const TrueCloud = () => {
  return (
    <>
      <section className="trueCloud">
        <div className="container">
          <div className="trueCloudRow">
            <div className="trueCloudTextPart">
              <h2>True Cloud Web Hosting</h2>
              <p>
                True Cloud Web Hosting All of the hosting packages we offer are
                deployed instantly on our SSD powered cloud. We don’t use
                dedicated servers that operate on single pieces of hardware. Our
                entire infrastructure is built to be reliable, secure, and
                scalable.
              </p>
            </div>
            <div className="trueCloudImgPart">
              <div>
                <img className="w-[140px] h-[30px]" src="Images/trueCloud_1.png" alt="true_cloud" />
              </div>
              <div>
                <img className="w-[125px] h-[50px]" src="Images/trueCloud_2.png" alt="true_cloud" />
              </div>
              <div>
                <img className="w-[125px] h-[53px]" src="Images/trueCloud_3.png" alt="true_cloud" />
              </div>
              <div>
                <img className="w-[135px] h-[55px]" src="Images/trueCloud_4.png" alt="true_cloud" />
              </div>
              <div>
                <img className="w-[135px] h-[55px]" src="Images/trueCloud_5.png" alt="true_cloud" />
              </div>
              <div>
                <img className="w-[135px] h-[55px]" src="Images/trueCloud_6.png" alt="true_cloud" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrueCloud;
