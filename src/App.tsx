import React from 'react';
import './App.css';
import Todo from './components/Todo';


const myTodoItems = [
  {
    id:1,
    title: 'I love Apex Legends'
  },
  {
    id:2,
    title: `I can't wait for new season`
  },
  {
    id:3,
    title: `I hope new season is great!!!`
  },
  {
    id:4,
    title: `I wonder which legend I am going to main next`
  }
]

const App: React.FC = () => {
  return (
    <div>
      <Todo items={myTodoItems}/>
      
    </div>
  )

}

export default App;