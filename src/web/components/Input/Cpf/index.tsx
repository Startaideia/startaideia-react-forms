import React from 'react'
import Text from '../Text'

function Cpf({ ...props }) {
  return (
    <Text
      mask='###.###.###-##'
      props={{ maxLength: 14 }}
      name='cpf'
      label='CPF'
      isCpf
      inputmode='numeric'
      {...props}
    />
  )
}

export default Cpf
