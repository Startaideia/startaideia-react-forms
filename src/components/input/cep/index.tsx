import React from "react"
import Text from "../text"

interface Props {
  [x: string]: any
}

/**
 * CEP default field
 *
 */
function CEP({ ...props }: Props) {
  return (
    <Text
      mask="#####-###"
      name="cep"
      label="CEP"
      inputmode="numeric"
      isLength={{ exact: 9 }}
      maxLength={9}
      {...props}
    />
  )
}

export default CEP
