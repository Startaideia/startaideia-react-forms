import React from "react"
import { IFormContext, IFormState } from "./context.interface"

export const INITAL_VALUE: IFormContext = {
  currentValue: {},
}

export default React.createContext<IFormState>({} as any)
