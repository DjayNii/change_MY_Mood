import React from "react";
import CtaButton from "./CtaButton";

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
      <div className="px-9 flex flex-col items-center">
        <div>
          <div>
            <h1
              className="font-Anton text-3xl leading-tight"
              style={{ color: props.textColor }}
            >
              CHOOSE COLORS FOR YOUR WEBSTIE
            </h1>
            <h2
              className="font-IBM font-light text-base mt-4 mb-4"
              style={{ color: props.primary }}
            >
              Choosing colors shouldn't feel like calculus class we speak fluent
              color, it's as simple as clicking a button,
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
