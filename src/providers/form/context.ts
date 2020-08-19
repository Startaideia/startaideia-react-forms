import React from "react"
import { IFormContext, IFormState } from "./context.interface"

export const INITAL_VALUE: IFormContext = {
  isLoading: false,
  fields: [],
  currentValue: {},
  validationRules: {},
  validationState: {},
}

export default React.createContext<IFormState>({} as any)
