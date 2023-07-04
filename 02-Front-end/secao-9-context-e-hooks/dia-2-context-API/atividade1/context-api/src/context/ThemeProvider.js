import React, { useState } from 'react';
import ThemeContext from './ThemeContext';

export default function ThemeProvider({ children }) {
  const [themeColor, setThemeColor] = useState('dark');

  function toggleTheme() {
    setThemeColor(themeColor === 'dark' ? 'light' : 'dark');
  }
  return (
    <ThemeContext.Provider value={{ color: themeColor, toggleTheme }} >
      <div className={ `App ${themeColor}` }>
        {/* encapsular todos os componentes-filho */}
        { children }
      </div>
    </ThemeContext.Provider>
  )
}
