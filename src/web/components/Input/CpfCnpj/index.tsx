import React from 'react'
import Text from '../Text'
import { applyMask } from 'packages'

function cpfCnpjMask(value: string): string {
  let mask = '##.###.###/####-##'
  if (value.length <= 14) {
    mask = '###.###.###-##'
  }
  return applyMask(mask, value)
}

function CpfCnpj({ ...props }) {
  return (
    <Text
      props={{ maxLength: 18 }}
      mask={cpfCnpjMask}
      inputmode='numeric'
      name='cpf_cnpj'
      label='CPF ou CNPJ'
      isCnpj
      {...props}
    />
  )
}

export default CpfCnpj
