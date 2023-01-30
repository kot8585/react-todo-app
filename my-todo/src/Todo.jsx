import React from 'react';
import { BsFillTrashFill } from "react-icons/bs";

export default function Todo({todo, onChecked, onDelete}) {
  return (
    <div>
      <li key={todo.id}>
            <input 
            type='checkbox' 
            value={todo.isCompleted}
            onClick={() => onChecked(todo.id)}/>
          {todo.text}
          <BsFillTrashFill onClick={() => onDelete(todo.id)}/></li>
    </div>
  );
}

