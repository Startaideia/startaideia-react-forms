import { removeMask } from 'packages/masks'
import isCnpj from '../isCnpj'
import isCpf from '../isCpf'

export default function (value: string) {
  const document = removeMask(value)
  return isCpf(document) || isCnpj(document)
}
