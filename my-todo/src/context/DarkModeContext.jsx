import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';

export const DarkModeContext = createContext('light');

export function DarkModeProvider({children}) {

  const [theme, setTheme] = useState('light');
  const toggleTheme = (theme) => {
    console.log('toggle theme 호출');
    return theme==='light' ? setTheme('dark') : setTheme('light');
  } 

  return (
    <DarkModeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </DarkModeContext.Provider>
  );
}

