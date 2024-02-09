import React from "react";
import TodoItem from "./TodoItem";
import "./style.css";

const Todo: React.FC = () => {
  return (
    <div className="todo-container">
      <ol>
        <TodoItem title="Hello" />
        <TodoItem title="I"/>
        <TodoItem title="Love"/>
        <TodoItem title="Apex Legends"/>
      </ol>
    </div>
  );
};

export default Todo;
