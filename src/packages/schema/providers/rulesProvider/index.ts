import * as rules from '../../rules'

import validator from 'validator'
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
    return get(this.rules, name, false) || validator[name]
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
