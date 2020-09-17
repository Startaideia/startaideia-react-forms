import React from 'react'

import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { lightTheme } from 'react-forms'
import Routes from '../routes'

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
