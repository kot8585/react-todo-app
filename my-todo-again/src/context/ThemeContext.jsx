import { useContext } from 'react';
import { useEffect } from 'react';
import {createContext, useState} from 'react';

const ThemeContext = createContext();

//isDark state를 context에서 관리하기 위해서 provider를 만들어준다.
export function ThemeProvider({children}) {
  const [isDark, setIsDark] = useState(false); 

  useEffect(()=> {
    if(localStorage.getItem('theme')) {
      setIsDark(localStorage.getItem('theme'));
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
    } 
  }, []);

  return (
  <ThemeContext.Provider value={{isDark, setIsDark, updateTheme}}>
    {children}
  </ThemeContext.Provider>
  );
}

function updateTheme(isDark) {
    if(isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('isDark', isDark);
  }

export function useThemeContext() {
  return useContext(ThemeContext);
}



