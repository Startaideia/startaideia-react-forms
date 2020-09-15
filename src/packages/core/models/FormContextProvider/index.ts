import { FormControl } from 'packages/core/models'
import { FormEvent } from 'react'

export default interface FormControlProvider {
  path: string
  initialValue: { [x: string]: string }
  formData: { [x: string]: string }
  setControl: (control: FormControl) => void
  setValue: (name: string, value: string) => void
  handleSubmit: (e: FormEvent) => void
}
