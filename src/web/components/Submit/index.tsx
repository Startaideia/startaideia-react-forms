import React from 'react'

import { useFormValidation } from 'packages'

function Submit({ children }) {
  const { isValid } = useFormValidation()
  return (
    <button className='stf-form-button' type='submit' disabled={!isValid}>
      {children}
    </button>
  )
}

export default Submit
