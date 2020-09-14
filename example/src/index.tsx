import React from 'react'
import ReactDOM from 'react-dom'

import { createRule } from 'react-forms'
import App from './App'

createRule('itIsUnique', function () {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(false)
    }, 5000)
  })
})

ReactDOM.render(<App />, document.getElementById('root'))
