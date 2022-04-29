// import { Button } from '@mui/material'
import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material'
import './style/index.sass'
import { Home, Intro, Hobby, Experience, Goal, } from './pages'
import { Nav, TopIcon, Footer } from './components'

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#ff8553',
        contrastText: '#fff'
      }
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <TopIcon />
      <Nav />
      <Home />
      <Intro />
      <Experience />
      <Hobby />
      <Goal />
      <Footer />
    </ThemeProvider >
  )
}

export default App
