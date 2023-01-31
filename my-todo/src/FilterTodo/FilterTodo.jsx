import React from 'react';
import styles from './FilterTodo.module.css';
import { BsSunFill } from "react-icons/bs";

export default function FilterTodo({types, selectedType, changeType}) {
  console.log('selectType', selectedType);

  return (
    <header className={styles.header}>
      <button><BsSunFill /></button>
      <ul className={styles.filters}>
        {types.map((type, index) => (
          <li key={index}>
            <button
             className={`${styles.filter} ${selectedType===type ? styles.selected : ''}`}
            onClick={() => changeType(type)}>{type}</button>
          </li>
        ))}
      </ul>
    </header>
  );
}

