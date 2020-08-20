import Mask from "string-mask"

/**
 * Get phone expected length
 *
 */
export function getPhoneLength({ mask = false, country, mobile }: any): number {
  const y = (country ? [2, 3] : [0, 1])[mobile ? 1 : 0]
  const x = mask ? 1 : 0
  const sizes = [
    [10, 14],
    [11, 15],
    [12, 18],
    [13, 19],
  ]
  return sizes[y][x]
}

/**
 * Get string with phone mask
 *
 */
export function phoneMask({ country, mobile, phone }: any) {
  return function (value: string): string {
    const prefix = country ? "+## (##)" : "(##)"
    const length = getPhoneLength({ country, mobile, phone })

    if (mobile && phone) {
      if (value.length < length) {
        return Mask.apply(value, `${prefix} ####-####`)
      }
      return Mask.apply(value, `${prefix} #####-####`)
    }

    if (mobile) {
      return Mask.apply(value, `${prefix} #####-####`)
    }

    if (phone) {
      return Mask.apply(value, `${prefix} ####-####`)
    }
    return value
  }
}
