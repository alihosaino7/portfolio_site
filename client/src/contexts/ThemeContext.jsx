

import React, { createContext, useContext, useState } from 'react'
import { colorsOptionsData } from '../data'

const ThemeContext = createContext()

export const ThemeContextProvider = ({ children }) => {

  const [theme, setTheme] = useState({
    primaryColor: colorsOptionsData.find(color => color.default).color,
    darkMode: true
  })

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => useContext(ThemeContext)
