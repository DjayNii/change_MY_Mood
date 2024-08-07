import React from "react";

function Navbar(props) {
  return (
    <>
      <div
        className="w-full h-[10vh] flex flex-row px-5 items-center justify-between color text-[var(--primary)] border-b-2  mb-5 font-thunder"
        style={{ "--primary": props.primary }}
      >
        <div>
          <h1 className="text-[2vh] xl:text-[3.5vh]">Change the colors</h1>
        </div>
        <div className="flex flex-row gap-3 items-center text-[1.5vh] xl: text-[3vh]">
          <h1>First</h1>
          <h1>Second</h1>
          <button
            style={{
              background: `linear-gradient(${props.secondary},${props.accent})`,
              color: props.primary,
            }}
            className="w-[19vw] h-full text-[1.5vh] px-2 py-2  items-center xl:w-[7vw]  h-full text-[2.1vh] px-2 md: w-[12vw]  "
          >
            CTA Button
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
