import React, { useRef } from "react";
import CopyButton from "./CopyButton";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

function PallateBox(props) {
  const colorBox = useRef([]);

  useGSAP(() => {
    gsap.from(colorBox.current, {
      opacity: 0,
      x: 450,
      stagger: 0.35,

      scrollTrigger: {
        trigger: "#pallatebox",
        start: "top 70%",
        end: "top 20%",
        toggleActions: "play reverse play reverse",
        scrub: 0.5,
      },
    });
  });
  return (
    <>
      <div
        className="h-[65.9vh] w-full rounded-t-[5.1vh] mt-[5vh] pt-6 overflow-hidden "
        style={{ backgroundColor: props.primary }}
        id="pallatebox"
      >
        <h1 className="font-IBM text-center text-lg">Color Pallate</h1>
        <div className="h-[44vh]  flex  flex-col gap-2 justify-center items-center py-4">
          <div
            className="h-[8.4vh] w-[70%] rounded-[1.938rem] font-IBM font-semibold uppercase flex items-center justify-evenly"
            style={{ backgroundColor: props.bg, color: props.textColor }}
            ref={(i) => {
              colorBox.current[0] = i;
            }}
          >
            backGround
            <CopyButton color={props.textColor} />
          </div>
          <div
            className="h-[8.4vh] w-[70%] rounded-[1.938rem] font-IBM font-semibold uppercase flex items-center justify-evenly gap-11"
            style={{ backgroundColor: props.textColor, color: props.bg }}
            ref={(i) => {
              colorBox.current[1] = i;
            }}
          >
            text
            <CopyButton color={props.bg} />
          </div>
          <div
            className="h-[8.4vh] w-[70%] rounded-[1.938rem] font-IBM font-semibold uppercase border-2 flex items-center justify-evenly gap-4"
            style={{ borderColor: props.bg, color: props.bg }}
            ref={(i) => {
              colorBox.current[2] = i;
            }}
          >
            primary
            <CopyButton color={props.bg} />
          </div>
          <div
            className="h-[8.4vh] w-[70%] rounded-[1.938rem] font-IBM font-semibold uppercase flex items-center justify-evenly"
            style={{ backgroundColor: props.secondary, color: props.textColor }}
            ref={(i) => {
              colorBox.current[3] = i;
            }}
          >
            secondary
            <CopyButton color={props.bg} />
          </div>
          <div
            className="h-[8.4vh] w-[70%] rounded-[1.938rem] font-IBM font-semibold uppercase flex items-center justify-evenly gap-6"
            style={{ backgroundColor: props.accent, color: props.textColor }}
            ref={(i) => {
              colorBox.current[4] = i;
            }}
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
