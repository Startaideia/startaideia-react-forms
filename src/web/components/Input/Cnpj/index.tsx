import React from 'react'
import Text from '../Text'

function Cnpj({ ...props }) {
  return (
    <Text
      props={{ maxLength: 18 }}
      mask='##.###.###/####-##'
      inputmode='numeric'
      name='cnpj'
      label='CNPJ'
      isCnpj
      {...props}
    />
  )
}

export default Cnpj
