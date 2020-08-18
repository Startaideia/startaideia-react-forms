export interface IFormContext {
  initialValue?: { [x: string]: any }
  currentValue?: { [x: string]: any }
}

export interface IFormState {
  state: IFormContext
  setState: React.Dispatch<React.SetStateAction<IFormContext>>
}
