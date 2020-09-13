import { ReactNode } from 'react'

export default interface IFormsProps {
  onChange?: (data: { [x: string]: any }) => void
  initialValue?: { [x: string]: any }
  children: ReactNode
}
