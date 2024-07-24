import React from "react";

function Hero(props) {
  return (
    <>
      <div className="p-4  flex flex-col  items-center">
        <div>
          <h1
            className=" mb-3 font-Anton text-[10vh]"
            style={{ color: props.primary }}
          >
            CHOOSE COLORS FOR YOUR WEBSTIE
          </h1>
          <h2
            className=" mb-3 font-thunder text-[3vh]"
            style={{ color: props.primary }}
          >
            Choosing colors shouldn't feel like calculus class <br /> we speak
            fluent color, it's as simple as clicking a button, choose easy and
            colors choose us!
          </h2>
        </div>
        <div className="flex flex-col gap-3 font-thunder">
          {/* background color */}
          <div
            className="h-[10vh] w-[40vh] flex items-center p-2 justify-around border-2 "
            style={{
              backgroundColor: props.bg,
              color: props.accent,
              borderColor: props.accent,
            }}
          >
            <h1>Background colour</h1>
          </div>
          {/* text color */}
          <div
            className="h-[10vh] w-[40vh] flex items-center p-2 justify-around "
            style={{ backgroundColor: props.textColor }}
          >
            <h1>Text Color</h1>
          </div>
          {/* primary color */}
          <div
            className="h-[10vh] w-[40vh] flex items-center p-2 justify-around "
            style={{ backgroundColor: props.primary }}
          >
            <h1>Priamry</h1>
          </div>
          {/* secondary color */}
          <div
            className="h-[10vh] w-[40vh] flex items-center p-2 justify-around "
            style={{ backgroundColor: props.secondary, color: props.textColor }}
          >
            <h1>Secondary</h1>
          </div>
          {/* Accent color */}
          <div
            className="h-[10vh] w-[40vh] flex items-center p-2 justify-around"
            style={{ backgroundColor: props.accent, color: props.textColor }}
          >
            <h1>Accent</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
