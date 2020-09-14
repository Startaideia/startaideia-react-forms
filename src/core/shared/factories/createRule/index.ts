import { RulesManager } from 'core/shared/singletons'

export default function (name, handle) {
  const instance = RulesManager.getInstance()
  return instance?.createRule(name, handle)
}
