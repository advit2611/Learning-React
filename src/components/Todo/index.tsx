import React from "react";
import TodoItem from "./TodoItem";
import "./style.css";

interface TodoArray {
  id: number;
  title: string;
}
interface TodoProps {
  items: TodoArray[];
}

const Todo: React.FC<TodoProps> = (props) => {
  return (
    <div className="todo-container">
      <ol>
        {props.items.map((item) => (
          <TodoItem key={item.id} title={item.title} />
        ))}
      </ol>
    </div>
  );
};

export default Todo;
