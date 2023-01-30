import React, { useState } from 'react';


export default function AddTodo({onAdd}) {
  const [todoName, setTodoName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(todoName.trim().length <= 0) {
      setTodoName('');  
      return;
    } 
    onAdd(todoName);
    setTodoName('');
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" 
      placeholder="Add Todo" 
      value={todoName} 
      onChange={(e) => setTodoName(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

