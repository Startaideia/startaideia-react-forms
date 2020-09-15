import React from 'react'

import { useFormValidation } from 'packages'
import { Button } from './styles'

function Submit({ children }) {
  const { isValid } = useFormValidation()
  return <Button disabled={!isValid}>{children}</Button>
}

export default Submit
