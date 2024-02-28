import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";


interface TodoItems {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
}

const ApiFetch: React.FC = (props) => {
  const [todos, setTodos] = useState<TodoItems[]>([]);
  useEffect(() => {
    axios.get<TodoItems[]>("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => setTodos(response.data))
  }, []);
  return (
    <div className="Todo">
      {todos.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </div>
  );
};

export default ApiFetch;
