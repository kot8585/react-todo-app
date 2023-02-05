import React from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import styles from './Todo.module.css'

export default function Todo({todo, handleCheck, handleDelete}) {
  const onCheck = (todo) => {
    todo.isCompleted = !todo.isCompleted;
    handleCheck(todo);
  }

  const onDelete = (todo) => {
    handleDelete(todo);
  } 
  return (
    <li className={styles.todo} key={todo.id}>
      <input className={styles.input} type="checkbox" onChange={() => onCheck(todo)} checked={todo.isCompleted}/>
      <label className={styles.text} htmlFor={todo.id}><span>{todo.text}</span></label>
      <button onClick={() => onDelete(todo)}>
        <span className={styles.button}><BsFillTrashFill className={styles.icon} /></span>
      </button>
    </li>
  );
}

