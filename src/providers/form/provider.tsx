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

  return (
    <FormContext.Provider value={{ state, setState }}>
      {children}
    </FormContext.Provider>
  )
}

export default FormProvider
