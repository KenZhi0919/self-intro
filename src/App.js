// import { Button } from '@mui/material'
import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material'
import './style/index.sass'
import { Home, Intro, Hobby, Experience, Goal, } from './pages'
import { Nav, Footer } from './components'
import { Routes, Route } from 'react-router-dom'

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
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/intro" element={<Intro />} />
        <Route exact path="/hobby" element={<Hobby />} />
        <Route exact path="/experience" element={<Experience />} />
        <Route exact path="/goal" element={<Goal />} />
      </Routes>
      <Footer />
    </ThemeProvider >
  )
}

export default App
