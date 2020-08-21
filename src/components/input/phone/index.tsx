import * as phoneService from "services/phone"
import Text from "../text"
import React from "react"

interface Props {
  [x: string]: any
}

/**
 * Phone form input
 *
 * It call be mobile, house phone or both
 *
 * @param {Props} {
 *   country = false,
 *   phone = true,
 *   mobile = true,
 *   ...props
 * }
 * @returns
 */
function Phone({
  country = false,
  phone = true,
  mobile = true,
  ...props
}: Props) {
  return (
    <Text
      mask={phoneService.phoneMask({ country, mobile, phone })}
      name="phone"
      type="tel"
      label="Telefone"
      inputmode="numeric"
      maxLength={phoneService.getPhoneLength({ country, mobile, mask: true })}
      isPhone={{ country, mobile: phone ? false : mobile, phone, mask: true }}
      {...props}
    />
  )
}

export default Phone
