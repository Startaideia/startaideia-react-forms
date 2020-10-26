import Mask from 'string-mask'

import removeMask from '../removeMask'

export default function (
  mask: string,
  value: string,
  opts: any = null
): string {
  if (!opts) {
    return Mask.apply(removeMask(value), mask)
  } else {
    const formatter = new Mask(mask, opts)
    return formatter.apply(removeMask(value))
  }
}
