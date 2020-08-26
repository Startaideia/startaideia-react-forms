import React from "react"
import Text from "../text"

interface Props {
  [x: string]: any
}

/**
 * CNPJ default field
 *
 * @param {Props} { ...props }
 * @returns
 */
function CNPJ({ ...props }: Props) {
  return (
    <Text
      mask="##.###.###/####-##"
      maxLength={18}
      isCNPJ
      name="cnpj"
      type="text"
      label="CNPJ"
      inputmode="numeric"
      {...props}
    />
  )
}

export default CNPJ
