import React from "react";
import Illustarion from "./Illustarion";

function Hero(props) {
  function copyToclipboard(typeOfColor) {
    navigator.clipboard.writeText(typeOfColor);
    alert("Copied to clipboard");
  }

  function copyWholePallate() {
    const pallate = `Background-Color: ${props.bg} , Text-Color : ${props.textColor} , Primary : ${props.primary} , Secondary : ${props.secondary} , Accent : ${props.accent}`;

    navigator.clipboard.writeText(pallate);
    alert("Pallet Copied to clipboard");
  }

  return (
    <>
      <div className="p-4  flex flex-col  items-center">
        <div>
          <div>
            <h1
              className=" mb-3 font-Anton text-[10vh]"
              style={{ color: props.primary }}
            >
              CHOOSE COLORS FOR YOUR WEBSTIE
            </h1>
            <h2
              className=" mb-3 font-lexend font-light text-[3vh]"
              style={{ color: props.primary }}
            >
              Choosing colors shouldn't feel like calculus class <br /> we speak
              fluent color, it's as simple as clicking a button,
            </h2>
          </div>
        </div>
        <div className="  w-[90%] mt-5 mb-7 flex flex-col items-center md:flex-row lg:flex-row justify-between ">
          <div className="flex flex-col gap-3 font-thunder  ">
            <h1
              className="font-lexend font-light p-2 mb-5 rounded-md"
              style={{
                borderColor: props.primary,
                color: props.primary,
                boxShadow: ` 0px 7px 10px -1px ${props.secondary}`,
              }}
            >
              Click on color to copy
            </h1>
            {/* background color */}
            <div
              className="h-[10vh] w-[40vh] flex items-center p-2 justify-around border-2  cursor-pointer"
              onClick={() => copyToclipboard(props.bg)}
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
              onClick={() => copyToclipboard(props.textColor)}
              className="h-[10vh] w-[40vh] flex items-center p-2 justify-around cursor-pointer"
              style={{ backgroundColor: props.textColor, color: props.bg }}
            >
              <h1>Text Color</h1>
            </div>
            {/* primary color */}
            <div
              onClick={() => copyToclipboard(props.primary)}
              className="h-[10vh] w-[40vh] flex items-center p-2 justify-around cursor-pointer "
              style={{ backgroundColor: props.primary }}
            >
              <h1>Priamry</h1>
            </div>
            {/* secondary color */}
            <div
              onClick={() => copyToclipboard(props.secondary)}
              className="h-[10vh] w-[40vh] flex items-center p-2 justify-around cursor-pointer"
              style={{
                backgroundColor: props.secondary,
                color: props.textColor,
              }}
            >
              <h1>Secondary</h1>
            </div>
            {/* Accent color */}
            <div
              onClick={() => copyToclipboard(props.accent)}
              className="h-[10vh] w-[40vh] flex items-center p-2 justify-around cursor-pointer"
              style={{ backgroundColor: props.accent, color: props.textColor }}
            >
              <h1>Accent</h1>
            </div>
            <h1
              className="font-lexend font-light p-2 mt-5 rounded-md cursor-pointer"
              onClick={() => copyWholePallate()}
              style={{
                borderColor: props.primary,
                color: props.primary,
                boxShadow: ` 0px 7px 10px -1px ${props.secondary}`,
              }}
            >
              Click here to copy whole pallate
            </h1>
          </div>
          <div
            className="relative w-[50%] backdrop-blur-lg border border-white/20 gap-2 p-4 rounded-lg mt-4 flex flex-col justify-center items-center"
            style={{ background: `${props.textColor}15` }}
          >
            <h1
              className="font-thunder text-2xl tracking-wide uppercase"
              style={{ color: props.primary }}
            >
              choose easy choose us
            </h1>
            <Illustarion
              primary={props.primary}
              secondary={props.secondary}
              accent={props.accent}
              textColor={props.textColor}
              bg={props.bg}
              className="absolute"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
