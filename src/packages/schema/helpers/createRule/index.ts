import { rulesProvider } from 'packages/schema/providers'

export default function (name: string, handle) {
  return rulesProvider.set(name, handle)
}
