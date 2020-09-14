import { IField } from 'core/types'

export default class Field implements IField {
  /**
   * Field name
   *
   */
  public name: string

  /**
   * Field path (id)
   */
  public path: string

  /**
   * Current field value
   *
   */
  public currentValue: string

  /**
   * Current value setter
   *
   */
  public set value(value: string) {
    this.currentValue = value
  }

  /**
   * Current value accessor
   *
   */
  public get value(): string {
    return this.currentValue || ''
  }

  /**
   * Validation rules
   *
   */
  public validationRules: any = []

  /**
   * Field errors
   *
   */
  public errors = []

  /**
   * Field validation state
   *
   */
  public validationState = 'pending'

  /**
   * Constructor method
   *
   * @param props
   */
  constructor(props: IField) {
    Object.assign(this, props)
  }

  /**
   * Validate the field
   *
   */
  async validate() {
    const errors: any = []
    for (const validationRule of this.validationRules) {
      errors.push(await validationRule(this))
    }
    this.errors = errors.filter((e) => e)
    this.validationState = this.errors.length === 0 ? 'valid' : 'invalid'
  }
}
