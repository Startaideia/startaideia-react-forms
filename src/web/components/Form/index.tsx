import React, { FormEvent, useCallback } from 'react'

import { FormContext } from 'core/shared/contexts'
import { IFormProps } from 'web/types'
import { FormProvider } from 'core'

function Form({ onSubmit, children, ...props }: IFormProps) {
  /* Handle form submission */
  const handleSubmit = useCallback(
    function (values) {
      return function (e: FormEvent) {
        e.preventDefault()
        if (onSubmit) {
          onSubmit({ ...values })
        }
      }
    },
    [onSubmit]
  )

  return (
    <FormProvider {...props}>
      <FormContext.Consumer>
        {({ getFormValue }) => (
          <form onSubmit={handleSubmit(getFormValue())}>{children}</form>
        )}
      </FormContext.Consumer>
    </FormProvider>
  )
}

export default Form
