import React, { useContext } from 'react'

import { FormProvider, FormContext } from 'packages/core'
import { useFormValidation } from 'packages/schema'

function FormConsumer({ children }) {
  const { handleSubmit } = useContext(FormContext)
  const { validationState } = useFormValidation()

  return (
    <form onSubmit={handleSubmit}>
      {children}
      {validationState}
    </form>
  )
}

function Form({ onSubmit, children, initialValue = {}, ...props }) {
  return (
    <FormProvider onSubmit={onSubmit} initialValue={initialValue} {...props}>
      <FormConsumer>{children}</FormConsumer>
    </FormProvider>
  )
}

export default Form
