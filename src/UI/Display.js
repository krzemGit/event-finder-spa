import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Display = ({ children }) => {
  const { theme } = useTheme();

  return (
    <main className={`display ${theme}`} >
      {children}
    </main>
  );
}

export default Display;