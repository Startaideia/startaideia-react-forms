import { ReactNode } from 'react'

export default interface IFormsProps {
  onChange?: (data: { [x: string]: any }) => void
  onSubmit?: (data: { [x: string]: any }) => void
  children: ReactNode
}
