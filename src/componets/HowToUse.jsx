import React, { useRef } from "react";
import { RiCircleFill } from "@remixicon/react";
import NoteOne from "./NoteOne";
import NoteTwo from "./NoteTwo";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

function HowToUse(props) {
  const notes = useRef([]);
  const mainDiv = useRef();

  useGSAP(() => {
    gsap.set(notes.current, { position: "absolute", opacity: 0 });

    ScrollTrigger.create({
      trigger: mainDiv.current,
      pin: true,
      start: "top top",
      end: "+=1800",
    });

    gsap.to(notes.current, {
      opacity: 1,
      yPercent: -90,
      stagger: 0.6,
      scrollTrigger: {
        trigger: mainDiv.current,
        start: "top 50%",
        scrub: 1,
        end: "+=2000px",
      },
    });
  });
  return (
    <>
      <div
        className="h-[130vh] w-[95%] mt-6 relative px-2 "
        style={{ backgroundColor: props.bg }}
        ref={mainDiv}
      >
        <h1
          className="font-Anton text-2xl text-left px-2"
          style={{ color: props.accent }}
        >
          How to USE
        </h1>
        {/* heading */}
        <div className=" flex flex-col gap-2 translate-y-[95vh]">
          {/* note 1 */}
          <div
            className="w-100% h-[100vh] rounded-br-[5.1vh] flex flex-col"
            style={{ backgroundColor: props.textColor }}
            ref={(i) => {
              notes.current[0] = i;
            }}
          >
            <NoteOne
              bg={props.bg}
              primary={props.primary}
              secondary={props.secondary}
              textColor={props.textColor}
            />
          </div>
          {/* note 2 */}
          <div
            className="w-100% h-[100vh] rounded-br-[5.1vh] flex flex-col  translate-y-2"
            style={{ backgroundColor: props.secondary }}
            ref={(i) => {
              notes.current[1] = i;
            }}
          >
            <NoteTwo
              bg={props.bg}
              primary={props.primary}
              secondary={props.secondary}
              textColor={props.textColor}
            />
          </div>
          {/* note 3 */}
          <div
            className="w-100% h-[90vh] rounded-br-[5.1vh] flex flex-col py-2   translate-y-4"
            style={{ backgroundColor: props.accent }}
            ref={(i) => {
              notes.current[2] = i;
            }}
          >
            <div className="flex flex-row gap-2 px-2">
              <RiCircleFill size={20} color={props.bg} />
              <RiCircleFill size={20} color={props.bg} />
              <RiCircleFill size={20} color={props.bg} />
              <RiCircleFill size={20} color={props.bg} />
              <RiCircleFill size={20} color={props.bg} />
              <RiCircleFill size={20} color={props.bg} />
              <RiCircleFill size={20} color={props.bg} />
              <RiCircleFill size={20} color={props.bg} />
              <RiCircleFill size={20} color={props.bg} />
              <RiCircleFill size={20} color={props.bg} />
              <RiCircleFill size={20} color={props.bg} />
            </div>
            <div className="relative top-[16%]">
              <div className="flex flex-row gap-4 p-1">
                <h1 className="text-8xl font-Anton">01</h1>
                <h1 className="text-xl font-Anton text-left">
                  background &<br></br> text
                </h1>
              </div>
              <div className="p-2 leading-6 font-IBM font-light text-base text-justify">
                Like the moon and stars in the night sky. Your background sets
                the scene, while your text color shines brightly, ensuring
                clarity and elegance.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HowToUse;
