import React from "react";
import "./style.css";

interface BlockProps {
  value: String;
}

const Block: React.FC<BlockProps> = (props) => {
  return (
    <div>
      <button className="block-button">{props.value}</button>
    </div>
  );
};

export default Block;
