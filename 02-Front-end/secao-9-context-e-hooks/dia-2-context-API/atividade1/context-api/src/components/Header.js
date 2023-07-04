import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

export default function Header() {
  const theme = useContext(ThemeContext);

  return (
    <header className="header">
      <h1>Trybe</h1>
      <button onClick={() => theme.toggleTheme()}>
        {theme.color === 'dark' ? '🌞' : '🌒'}
      </button>
    </header>
  )
}
