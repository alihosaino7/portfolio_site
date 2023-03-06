
import React from 'react'
import { ScrollButton, CustomizeThemeBox } from './components'
import { Home, About, Contact, Portfolio, Skills, Services } from './sections'
import { Navbar, Footer, Container } from './layout'
import { useThemeContext } from './contexts/ThemeContext'

import './App.css'

function App()  {

  const { theme: { darkMode } } = useThemeContext()

  return (
    <div className={`${darkMode ? 'dark' : ''} ${darkMode ? 'bg-main-bg-dark' : 'bg-main-bg-light'}`}>
      <ScrollButton />
      <CustomizeThemeBox />
      {/* <SettingsBox /> */}
      <Navbar />
      <Container>
        <Home />
        <About />
        <Skills />
        <Services />
        <Portfolio />
        <Contact />
      </Container>
      <Footer />
    </div>
  )
}

export default App
