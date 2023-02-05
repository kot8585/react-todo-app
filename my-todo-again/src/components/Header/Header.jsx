import React, { useContext } from 'react';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import {  useThemeContext } from '../../context/ThemeContext';
import styles from './Header.module.css';

export default function Header({filters, filter, handleFilter}) 
{
  const {isDark, setIsDark, updateTheme} = useThemeContext();


  return (
    <header className={styles.header}>
      <button className={styles.theme_icon} onClick={()=>{
        setIsDark(!isDark);
        updateTheme(!isDark);
        }}>
        {isDark ? <BsFillSunFill/> : <BsFillMoonFill /> }
      </button>
      <ul className={styles.filters}>
        {filters.map((value) => (
           <li 
            className={`${styles.filter} ${filter===value && styles.selected}`}
            key={value} 
            onClick={() => handleFilter(value)}
           >
             <button className={styles.filter_btn}>{value}</button>
          </li>
        ))}
      </ul>
    </header>
  );
}

