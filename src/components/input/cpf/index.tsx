import React from "react"
import Text from "../text"

interface Props {
  [x: string]: any
}

/**
 * CPF default field
 *
 * @param {Props} { ...props }
 * @returns
 */
function CPF({ ...props }: Props) {
  return (
    <Text
      mask="###.###.###-##"
      maxLength={14}
      isCPF
      name="cpf"
      type="text"
      label="CPF"
      inputmode="numeric"
      {...props}
    />
  )
}

export default CPF
