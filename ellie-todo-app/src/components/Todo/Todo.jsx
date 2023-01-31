import React from 'react';
import {FaTrashAlt} from 'react-icons/fa'

export default function Todo({todo, onUpdate, onDelete}) {
  const {text, status} = todo;
  const handleChange = (e) => {
    const status = e.target.checked ? 'completed' : 'active';
    onUpdate({...todo, status});
  }
  const handleDelete = () => onDelete(todo);

  return (
    <li key={todo.id}>
      <input 
      type="checkbox" 
      id={todo.id} 
      checked={status === 'completed'}
      onChange={handleChange}
      />
      {/* 라벨 왜 붙이는거지? input의 id와 label의 htmlFor 연결. 리더기를 위해 사용?*/}
      <label htmlFor={todo.id}>{text}</label>
      <button onClick={handleDelete}>
        <FaTrashAlt/>
      </button>
    </li>
  );
}

