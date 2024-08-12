import React, { useRef } from "react";
import CopyButton from "./CopyButton";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
function PallateBox(props) {
  const tl = useRef();
  useGSAP(() => {
    tl.current = gsap
      .timeline()
      .from("#bgBox", {
        opacity: 0,
        x: -50,
        duration: 1,
      })
      .from(
        "#textBox",
        {
          opacity: 0,
          x: -50,
          duration: 1,
        },
        "<75%"
      )
      .from(
        "#primaryBox",
        {
          opacity: 0,
          x: -50,
          duration: 1,
        },
        "<65%"
      )
      .from(
        "#secondaryBox",
        {
          opacity: 0,
          x: -50,
          duration: 1,
        },
        "<50%"
      )
      .from(
        "#accentBox",
        {
          opacity: 0,
          x: -50,
          duration: 1,
        },
        "<45%"
      );
  });
  return (
    <>
      <div
        className="h-[65.9vh] w-full rounded-t-[5.1vh] mt-[5vh] pt-6 "
        style={{ backgroundColor: props.primary }}
      >
        <h1 className="font-IBM text-center text-lg">Color Pallate</h1>
        <div className="h-[44vh]  flex  flex-col gap-2 justify-center items-center py-4">
          <div
            className="h-[7.4vh] w-[90%] rounded-[1.938rem] font-IBM font-semibold uppercase flex items-center justify-evenly"
            style={{ backgroundColor: props.bg, color: props.textColor }}
            id="bgBox"
          >
            backGround
            <CopyButton color={props.textColor} />
          </div>
          <div
            className="h-[7.4vh] w-[90%] rounded-[1.938rem] font-IBM font-semibold uppercase flex items-center justify-evenly gap-11"
            style={{ backgroundColor: props.textColor, color: props.bg }}
            id="textBox"
          >
            text
            <CopyButton color={props.bg} />
          </div>
          <div
            className="h-[7.4vh] w-[90%] rounded-[1.938rem] font-IBM font-semibold uppercase border-2 flex items-center justify-evenly gap-4"
            style={{ borderColor: props.bg, color: props.bg }}
            id="primaryBox"
          >
            primary
            <CopyButton color={props.bg} />
          </div>
          <div
            className="h-[7.4vh] w-[90%] rounded-[1.938rem] font-IBM font-semibold uppercase flex items-center justify-evenly"
            style={{ backgroundColor: props.secondary, color: props.textColor }}
            id="secondaryBox"
          >
            secondary
            <CopyButton color={props.bg} />
          </div>
          <div
            className="h-[7.4vh] w-[90%] rounded-[1.938rem] font-IBM font-semibold uppercase flex items-center justify-evenly gap-6"
            style={{ backgroundColor: props.accent, color: props.textColor }}
            id="accentBox"
          >
            accent
            <CopyButton color={props.bg} />
          </div>
        </div>
      </div>
    </>
  );
}

export default PallateBox;
