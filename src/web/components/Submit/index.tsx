import React from 'react'

import { useFormValidation } from 'packages'

function Submit({ className = '', children, ...props }) {
  const { isValid } = useFormValidation()
  return (
    <button
      className={`stf-form-button ${className}`}
      type='submit'
      disabled={!isValid}
      {...props}
    >
      {children}
    </button>
  )
}

export default Submit
