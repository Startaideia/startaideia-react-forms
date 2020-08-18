import React from "react"
import { FormProvider } from "providers"

interface Props {
  inititalValue: any
  [x: string]: any
}

function Form({ initialValue, children }: Props) {
  return (
    <FormProvider initialValue={initialValue}>
      <form>{children}</form>
    </FormProvider>
  )
}

export default Form
