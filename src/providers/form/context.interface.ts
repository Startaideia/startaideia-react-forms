export interface IFormContext {
  fields: String[]
  isLoading: boolean
  initialValue?: { [x: string]: any }
  currentValue?: { [x: string]: any }
  validationRules?: { [x: string]: any }
  validationState?: { [x: string]: boolean }
}

export interface IFormState {
  isValid: () => boolean
  state: IFormContext
  setState: React.Dispatch<React.SetStateAction<IFormContext>>
}
