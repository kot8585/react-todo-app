import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const DarkModeContext = createContext();

export function DarkModeProvider({children}) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    updateDarkMode(!darkMode);
  }
  
  //❗️다시 한번 보기. 처음 로드될때 localStorage값이나 시스템의 모드를 읽어서 처음 화면을 만듬
  useEffect(() => {
    const isDark = localStorage.theme === 'dark' || 
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setDarkMode(isDark);
    updateDarkMode(isDark);
  }, []);
  return <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>{children}</DarkModeContext.Provider>
}



function updateDarkMode(darkMode){
  if(darkMode) {
    console.log(document.documentElement.classList);
    
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light';
  }
}

// 밖에서 내부적으로 어떤 context를 사용해야 하는지 상관하지 않아도 된다
export const useDarkMode = () => useContext(DarkModeContext);
