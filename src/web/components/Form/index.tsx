import React from 'react'

import { FormProvider, FormContext } from 'packages/core'

function Form({ onSubmit, children, initialValue = {}, ...props }) {
  return (
    <FormProvider onSubmit={onSubmit} initialValue={initialValue} {...props}>
      <FormContext.Consumer>
        {({ handleSubmit }) => <form onSubmit={handleSubmit}>{children}</form>}
      </FormContext.Consumer>
    </FormProvider>
  )
}

export default Form
