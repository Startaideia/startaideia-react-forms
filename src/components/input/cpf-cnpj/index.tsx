import React from "react"
import Text from "../text"
import Mask from "string-mask"

interface Props {
  [x: string]: any
}

function cpfCnpjMask(value: string): string {
  let mask = "##.###.###/####-##"
  if (value.length <= 11) {
    mask = "###.###.###-##"
  }
  return Mask.apply(value, mask)
}

/**
 * CPFCNPJ default field
 *
 * @param {Props} { ...props }
 * @returns
 */
function CPFCNPJ({ ...props }: Props) {
  return (
    <Text
      mask={cpfCnpjMask}
      maxLength={18}
      isCPFCNPJ
      name="cpf_cnpj"
      type="text"
      label="CPF ou CNPJ"
      inputmode="numeric"
      {...props}
    />
  )
}

export default CPFCNPJ
