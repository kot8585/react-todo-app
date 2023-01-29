import React, { useState } from 'react';

export default function AddTodo({addHandler}) {
  const [todoName, setTodoName] = useState('');

  const activeButton = () => {
    addHandler(todoName);
    setTodoName('');
  }
  
  return (
    <footer>
      <input type="text" 
      placeholder="Add Todo" 
      value={todoName} 
      onChange={(e) => setTodoName(e.target.value)}
      onKeyDown={(e) => {
        if(e.key === 'Enter')
          activeButton();
      }}/>
      
      <button onClick={()=> activeButton}>Add</button>
    </footer>
  );
}

