import React from "react";
import { RiCircleFill, RiMoonFill, RiBardFill } from "@remixicon/react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

function NoteOne(props) {
  return (
    <>
      <div
        className="flex flex-row gap-2 px-2 "
        style={{ backgroundColor: props.secondary }}
      >
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
      <div
        className="h-[40%] flex flex-row py-4 relative"
        style={{
          background: `linear-gradient(to bottom  ,${props.secondary} 30%, ${props.textColor})`,
        }}
      >
        <RiBardFill
          size={30}
          color={props.textColor}
          className="absolute left-4 top-[40%]"
        />
        <RiBardFill
          size={30}
          color={props.textColor}
          className="absolute left-[20%] top-[26%]"
        />
        <RiBardFill
          size={30}
          color={props.textColor}
          className="absolute left-[55%] top-[47%]"
        />
        <RiBardFill
          size={30}
          color={props.textColor}
          className="absolute right-[55%] top-[37%]"
        />
        <RiBardFill
          size={30}
          color={props.textColor}
          className="absolute right-[15%] top-[40%]"
        />
        <RiBardFill
          size={30}
          color={props.textColor}
          className="absolute right-[35%] top-[20%]"
        />
        <RiMoonFill
          size={90}
          color={props.textColor}
          className="absolute right-2 "
        />
      </div>
      <div className="relative" style={{ color: props.bg }}>
        <div className="flex flex-row gap-4 p-1">
          <h1 className="text-8xl font-Anton">01</h1>
          <h1 className="text-xl font-Anton text-left">
            background &<br></br> text
          </h1>
        </div>
        <div className="p-2 leading-6 font-IBM font-light text-base text-justify">
          They are like the moon and stars in the night sky. Your background
          sets the scene, while your text color shines brightly, ensuring
          clarity and elegance.
        </div>
      </div>
    </>
  );
}

export default NoteOne;
