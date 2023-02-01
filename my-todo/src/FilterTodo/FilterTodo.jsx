import React from 'react';
import styles from './FilterTodo.module.css';
import { BsSunFill } from "react-icons/bs";
import { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';

export default function FilterTodo({types, selectedType, changeType}) {
  const darkMode = useContext(DarkModeContext);
  console.log('darkMode', darkMode);

  return (
    <header className={styles.header}>
      <button onClick={() => {
        darkMode.toggleTheme(darkMode.theme);
        //❓ 얘 여기서 부르는게 맞남...?
        changeThemeColor(darkMode.theme);
        }} className={styles.darkmode}><BsSunFill /></button>
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

  function changeThemeColor(theme) {
    const style = document.documentElement.style; 
    if(theme === 'dark') {
      style.setProperty("--color-bg", "#2d2e50f3");
      style.setProperty("--color-bg-dark", "#1d2038d9");
      style.setProperty("--color-text", "white");
    } else {
      style.setProperty("--color-bg", "#fff");
      style.setProperty("--color-bg-dark", "#f0f0f0");
      style.setProperty("--color-text", "#22243b");
    }
  }
