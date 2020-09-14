import * as config from 'core/config'
import get from 'lodash/get'
import set from 'lodash/set'

export default class ConfigManager {
  static instance?: ConfigManager

  public config = config

  static getInstance() {
    if (!ConfigManager.instance) {
      ConfigManager.instance = new ConfigManager()
    }
    return this.instance
  }

  public get(key, defaultValue = '') {
    return get(this.config, key, defaultValue)
  }

  public set(key, value) {
    this.config = set(this.config, key, value)
    return this
  }
}
