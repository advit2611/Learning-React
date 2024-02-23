import React, { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import Counter from "./components/Todo/Counter";
import Block from "./components/Todo/Block";

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
  return (
    <div>
      <Todo items={myTodoItems} />
      <button
        onClick={(e) => {
          setState(!state);
        }}
        style={{ background: "Pink", margin: 10 }}
      >
        Toggle
      </button>
      {state ? <Counter /> : ""}

      <div className="board">
        <div className="row">
          <Block value='X'/>
          <Block value=''/>
          <Block value=''/>
        </div>
        <div className="row">
          <Block value=''/>
          <Block value=''/>
          <Block value=''/>
        </div>
        <div className="row">
          <Block value=''/>
          <Block value=''/>
          <Block value=''/>
        </div>
      </div>
    </div>
  );
};

export default App;
