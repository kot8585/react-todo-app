import React from 'react';
import { BsFillTrashFill } from "react-icons/bs";

export default function Todo({todo, onChecked, onDelete}) {
  return (
      <li key={todo.id}>
          <input 
          type='checkbox' 
          //❗️엘리꺼랑 비교해보기
          checked={todo.isCompleted}
          onChange={() => onChecked(todo.id)}/>
        {todo.text}
        <BsFillTrashFill onClick={() => onDelete(todo.id)}/>
      </li>
  );
}

