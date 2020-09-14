import { RulesManager } from 'core/shared/singletons'
import isArray from 'lodash/isArray'
import config from '../config'

export default function (rules): any[] {
  const validator = RulesManager.getInstance()?.validator || {}
  const output: any = []

  for (const rule in rules) {
    const params = isArray(rules[rule]) ? rules[rule] : [rules[rule]]

    output.push(async function (field) {
      const locale = config()?.get('locale')
      const message = config()?.get(
        `lang.${locale}.validations.${rule}`,
        `Invalid rule: ${rule}`
      )

      if (!(await validator[rule](field.value, ...params))) {
        return { [rule]: message }
      }
      return null
    })
  }

  return output
}
