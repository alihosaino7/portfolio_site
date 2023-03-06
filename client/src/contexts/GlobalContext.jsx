


import React, { createContext, useContext, useState } from 'react'

const GlobalContext = createContext()

export const GlobalContextProvider = ({ children }) => {

   const [themeBoxOpened, setThemeBoxOpened] = useState(false)

  return (
    <GlobalContext.Provider value={{ themeBoxOpened, setThemeBoxOpened }}>
      {children}
    </GlobalContext.Provider>
  )
}

// create custom hook to provide theme data
export const useGlobalContext = () => useContext(GlobalContext)
