import React from "react";

function CtaButton(props) {
  return (
    <div
      className="w-[14.815vh] h-[4.35vh] rounded-[48px] border-2 font-Anton text-sm flex items-center justify-center"
      style={{
        backgroundColor: props.textColor,
        borderColor: props.accent,
        color: props.bg,
        boxShadow: ` 0 0px 24px 0${props.accent}, 0 2px 4px 0 ${props.accent}`,
      }}
    >
      Change the color
    </div>
  );
}

export default CtaButton;
