import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
}


const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark')

  const handleThemeChange = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  }

  const value = {
    theme,
    changeTheme: handleThemeChange
  }

  /*
    I suppose that the css library expects to have all the CSS-in-JS styles here and I should have made theme here, but the time constrains forced me to use SCSS instead - I know them better and would be able to wirte faster & take advantage of the cascade rules.
  */

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;