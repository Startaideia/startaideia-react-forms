import Mask from 'string-mask'

import removeMask from '../removeMask'

export default function (mask: string, value: string): string {
  return Mask.apply(removeMask(value), mask)
}
