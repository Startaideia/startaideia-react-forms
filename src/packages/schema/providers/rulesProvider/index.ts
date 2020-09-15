import * as rules from '../../rules'

import set from 'lodash/set'
import get from 'lodash/get'

const rulesProvider = {
  /**
   * All defined rules
   *
   */
  rules,

  /**
   * Gets an defined rule
   *
   */
  get: async function (name: string) {
    return (
      get(this.rules, name, false) ||
      (await import(`validator/lib/${name}`)).default
    )
  },

  /**
   * Defines a new rule
   *
   */
  set(name: string, handle) {
    set(this.rules, name, handle)
    return this
  }
}

export default rulesProvider
