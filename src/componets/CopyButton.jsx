import React from "react";
import { RiFileCopyLine } from "@remixicon/react";

function CopyButton(props) {
  return (
    <div>
      <RiFileCopyLine size={20} color={props.color} className="copy" />
    </div>
  );
}

export default CopyButton;
