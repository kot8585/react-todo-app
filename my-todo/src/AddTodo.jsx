import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid';


export default function AddTodo({onAdd}) {
  const [todoText, setTodoText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(todoText.trim().length <= 0) {
      setTodoText('');  
      return;
    } 
    onAdd({id: uuidv4(), text:todoText, isCompleted: false});
    setTodoText('');
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" 
      placeholder="Add Todo" 
      value={todoText} 
      onChange={(e) => setTodoText(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

