import React from 'react'

import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import Routes from '../routes'

function App() {
  return (
    <ThemeProvider theme={{}}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
