import React, { useState } from "react";

const Toggle_switch = () => {
  const [isOn, setIsOn] = useState(false);
  return (
    <>
      <section className="toggle_switch">
        <div className="container">
          <button
            onClick={() => setIsOn(!isOn)}
            className={`w-[70px] h-[35px] flex items-center p-1 rounded-full transition duration-300 ${
              isOn ? "bg-[#B00000]" : "bg-lime-900"
            }`}
          >
            <div
              className={`w-[20px] h-[20px] bg-white rounded-full shadow-md transform transition duration-300 ${
                isOn ? "translate-x-[35px]" : "translate-x-[4px]"
              }`}
            ></div>
          </button>
        </div>
      </section>
    </>
  );
};

export default Toggle_switch;
