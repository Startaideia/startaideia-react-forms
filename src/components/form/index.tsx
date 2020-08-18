import React, { useContext } from "react"
import { FormProvider, FormContext } from "providers"
import { Form as StyledForm } from "styles"

interface Props {
  inititalValue?: any
  onSubmit?: (data: any) => void
  [x: string]: any
}

function FormInner({ onSubmit, children }: Props) {
  const { state } = useContext(FormContext)

  function handleSubmit(e: any) {
    e.preventDefault()

    if (!onSubmit) return

    onSubmit({ ...state.currentValue })
  }

  return <StyledForm onSubmit={handleSubmit}>{children}</StyledForm>
}

function Form({ initialValue, children, ...props }: Props) {
  return (
    <FormProvider initialValue={initialValue}>
      <FormInner {...props}>{children}</FormInner>
    </FormProvider>
  )
}

export default Form
