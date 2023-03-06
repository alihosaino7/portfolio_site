import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeContextProvider } from './contexts/ThemeContext'
import { GlobalContextProvider } from './contexts/GlobalContext'

import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <GlobalContextProvider>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </GlobalContextProvider>
)
