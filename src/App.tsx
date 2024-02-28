import React, { useEffect, useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import Counter from "./components/Counter";
import Block from "./components/Block";
import ApiFetch from "./components/ApiFetch";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { decrement, increment } from "./redux/slices/counter";

const myTodoItems = [
  {
    id: 1,
    title: "I love Apex Legends",
  },
  {
    id: 2,
    title: `I can't wait for new season`,
  },
  {
    id: 3,
    title: `I hope new season is great!!!`,
  },
  {
    id: 4,
    title: `I wonder which legend I am going to main next`,
  },
];

const App: React.FC = () => {
  const [state, setState] = useState<boolean>(true);
  const [values, setValues] = useState(Array(9).fill(null));
  const [currentTurn, setTurn] = useState("X");

  // Learning Redux
  const count = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  const checkWinner = () => {
    const winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const condition of winningConditions) {
      const [a, b, c] = condition;
      if (
        values[a] !== null &&
        values[a] === values[b] &&
        values[b] === values[c]
      )
        return true;
    }
    return false;
  };

  const checkFilled = () => {
    for (const item of values) {
      if (item === null) {
        return false;
      }
    }
    return true;
  };

  const handleTurn = (index: number) => {
    if (values[index] !== null) return;
    values[index] = currentTurn;
    setValues(values);
    if (checkWinner()) {
      alert(`${currentTurn} Won`);
      setValues(Array(9).fill(null));
    }
    if (checkFilled()) {
      alert(`Game Finished`);
      setValues(Array(9).fill(null));
    }

    setTurn(currentTurn === "X" ? "O" : "X");
  };
  return (
    <div>
      <Todo items={myTodoItems} />
      <button
        onClick={(e) => {
          setState(!state);
        }}
        style={{ background: "LightPink", margin: 10 }}
      >
        Toggle
      </button>
      {state ? <Counter /> : ""}

      <div className="board">
        <h1>{currentTurn}'s turn</h1>
        <div className="row">
          <Block onClick={() => handleTurn(0)} value={values[0]} />
          <Block onClick={() => handleTurn(1)} value={values[1]} />
          <Block onClick={() => handleTurn(2)} value={values[2]} />
        </div>
        <div className="row">
          <Block onClick={() => handleTurn(3)} value={values[3]} />
          <Block onClick={() => handleTurn(4)} value={values[4]} />
          <Block onClick={() => handleTurn(5)} value={values[5]} />
        </div>
        <div className="row">
          <Block onClick={() => handleTurn(6)} value={values[6]} />
          <Block onClick={() => handleTurn(7)} value={values[7]} />
          <Block onClick={() => handleTurn(8)} value={values[8]} />
        </div>
      </div>
      <h1>The Count is {count}</h1>
      <button onClick={() => dispatch(increment())}> Increment </button>
      <button onClick={() => dispatch(decrement())}> Decrement </button>
      <div>
        <ApiFetch />
      </div>
    </div>
  );
};

export default App;
