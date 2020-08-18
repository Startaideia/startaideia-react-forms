import React from "react"
import { FormProvider } from "providers"

interface Props {
  [x: string]: any
}

function Form({ children }: Props) {
  return (
    <FormProvider>
      <form>{children}</form>
    </FormProvider>
  )
}

export default Form
