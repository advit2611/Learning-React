import React, { useState } from "react";
import "./style.css";

interface BlockProps {
  value: string;
  onClick?: () => void;
}

const Block: React.FC<BlockProps> = (props) => {

  return (
    <div>
      <button
        onClick={props.onClick}
        className={`block-button ${props.value ? props.value : ''}`}
      >
        {props.value}
      </button>
    </div>
  );
};

export default Block;
