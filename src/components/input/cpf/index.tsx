import React from "react"
import Text from "../text"

interface Props {
  [x: string]: any
}

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
