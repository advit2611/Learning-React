import React, { useEffect, useState } from "react";
import "./style.css";

const Counter: React.FC = (props) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("Mounted");

    return function () {
        console.log("Unmounted")
    }
  }, []);

  useEffect(() => {
    console.log("Counter Updated");
  }, [counter]);

  function handleIncrement() {
    setCounter(counter + 1);
  }
  function handleDecrement() {
    if (counter === 0) return;
    setCounter(counter - 1);
  }
  return (
    <div className="counter-container">
      <h1>{counter}</h1>
      <button
        onClick={handleIncrement}
        style={{ backgroundColor: "lightgreen" }}
      >
        INC
      </button>
      <button
        onClick={handleDecrement}
        style={{ backgroundColor: "palegoldenrod" }}
      >
        DEC
      </button>
    </div>
  );
};

export default Counter;
