import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from 'react-forms'
import App from './App'

ReactDOM.render(
  <ThemeProvider theme={lightTheme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)
