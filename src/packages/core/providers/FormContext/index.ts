import React from 'react'

import { FormContextProvider } from 'packages/core'

const FormContext = React.createContext<FormContextProvider>({
  path: ''
} as FormContextProvider)

export default FormContext
