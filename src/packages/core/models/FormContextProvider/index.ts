import { FormControl } from 'packages/core/models'
import { FormEvent } from 'react'

export default interface FormControlProvider {
  path: string
  initialValue: { [x: string]: string }
  formData: { [x: string]: string }
  setControl: (control: FormControl) => void
  removeControl: (name: string) => void
  setProps: (name: string, value: any, key: string) => void
  handleSubmit: (e: FormEvent) => void
  controls: FormControl[]
}
