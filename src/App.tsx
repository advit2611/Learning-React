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