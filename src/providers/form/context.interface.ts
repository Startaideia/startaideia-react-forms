export interface IFormContext {
  fields: String[]
  initialValue?: { [x: string]: any }
  currentValue?: { [x: string]: any }
  validationRules?: { [x: string]: any }
}

export interface IFormState {
  state: IFormContext
  setState: React.Dispatch<React.SetStateAction<IFormContext>>
}
