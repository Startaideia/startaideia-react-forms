import { rulesProvider } from 'packages/schema/providers'

export default function (name: string) {
  return rulesProvider.get(name)
}
