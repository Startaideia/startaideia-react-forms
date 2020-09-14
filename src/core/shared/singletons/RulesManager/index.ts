import merge from 'lodash/merge'
import validator from 'validator'

export default class RulesManager {
  /**
   * RulesManager instance
   *
   */
  static instance?: RulesManager

  /**
   * All rules validator
   *
   */
  public validator = validator

  /**
   * Get a instance
   *
   */
  static getInstance() {
    if (!RulesManager.instance) {
      RulesManager.instance = new RulesManager()
    }
    return this.instance
  }

  /**
   * Create a new rule
   *
   */
  public createRule(name, handle) {
    this.validator = merge(this.validator, { [name]: handle })
    return this
  }
}
