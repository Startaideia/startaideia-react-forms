import React, { useState } from "react"
import FormContext, { INITAL_VALUE } from "./context"
import { IFormContext } from "./context.interface"

interface Props {
  initialValue: any
  [x: string]: any
}

function FormProvider({ initialValue = {}, children }: Props) {
  const [state, setState] = useState<IFormContext>({
    initialValue,
    ...INITAL_VALUE,
  })

  function isValid(): boolean {
    for (const key in state.validationState) {
      if (!state.validationState[key]) return false
    }
    return true
  }

  return (
    <FormContext.Provider value={{ isValid, state, setState }}>
      {children}
    </FormContext.Provider>
  )
}

export default FormProvider
