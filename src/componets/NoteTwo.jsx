import React from "react";
import { RiCircleFill } from "@remixicon/react";
import Food from "./Food";
function NoteTwo(props) {
  return (
    <>
      <div
        className="flex flex-row gap-2 px-2"
        style={{ backgroundColor: props.textColor }}
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
        className="h-[40%] flex flex-row py-4 relative
      "
        style={{
          background: `linear-gradient(to bottom  ,${props.textColor} 50%, ${props.secondary})`,
        }}
      >
        <Food
          bg={props.bg}
          primary={props.primary}
          secondary={props.secondary}
          textColor={props.textColor}
        />
      </div>

      <div className="relative ">
        <div className="flex flex-row gap-4 p-1">
          <h1 className="text-8xl font-Anton">02</h1>
          <h1 className="text-xl font-Anton text-left">
            primary &<br></br> secondary
          </h1>
        </div>
        <div className="p-2 leading-6 font-IBM font-light text-base text-justify">
          are like the burger and drinks. The burger, being the main dish,
          represents primary colors used for buttons and CTAs, while the drinks,
          your secondary color, are used for shadows or hover effects.
        </div>
      </div>
    </>
  );
}

export default NoteTwo;
