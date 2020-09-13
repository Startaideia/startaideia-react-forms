import { IField } from 'core/types'

export default class Field implements IField {
  public name: string
  public path: string
  public value?: string

  constructor(props: IField) {
    Object.assign(this, props)
  }
}
