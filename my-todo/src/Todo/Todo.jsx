import React from 'react';
import { BsFillTrashFill } from "react-icons/bs";
import styles from './Todo.module.css'

export default function Todo({todo, onChecked, onDelete}) {
  return (
      <li className={styles.list} key={todo.id}>
          <input 
          className={styles.checkbox}
          type='checkbox' 
          //❗️엘리꺼랑 비교해보기
          checked={todo.isCompleted}
          onChange={() => onChecked(todo.id)}/>
        <span className={`${styles.text} ${todo.isCompleted && styles.completed}`}>{todo.text}</span>
        <span className={styles.icon}>
          <button  
          className={styles.button}
          onClick={() => onDelete(todo.id)}>
            <BsFillTrashFill className={styles.deleteIcon}/>
          </button>
        </span>
      </li>
  );
}

