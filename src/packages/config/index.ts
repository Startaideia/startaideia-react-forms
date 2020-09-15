import set from 'lodash/set'
import get from 'lodash/get'

import * as lang from './lang'
import app from './app'

const config = {
  /**
   * Config global params
   *
   */
  params: {
    app,
    lang
  },

  /**
   * Set a config item
   *
   */
  set(key: string, value) {
    set(this.params, key, value)
    return this
  },

  /**
   * Get a config item
   *
   */
  get(key: string, defaultvalue?) {
    return get(this.params, key, defaultvalue || '')
  }
}

export default config
