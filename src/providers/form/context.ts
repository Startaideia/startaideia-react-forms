import React from "react"
import { IFormContext } from "./context.interface"

const INITAL_VALUE: IFormContext = {
  currentValue: {},
}

export default React.createContext<IFormContext>(INITAL_VALUE)
