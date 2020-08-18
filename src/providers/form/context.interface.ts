export interface IFormContext {
  currentValue: { [x: string]: any }
  initialValue?: { [x: string]: any }
}

export interface IFormState {
  state: IFormContext
  setState: React.Dispatch<React.SetStateAction<IFormContext>>
}
