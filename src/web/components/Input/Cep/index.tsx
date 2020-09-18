import React from 'react'
import Text from '../Text'

function Cep({ ...props }) {
  return (
    <Text
      mask='#####-###'
      props={{ maxLength: 9 }}
      name='zipcode'
      label='CEP'
      inputmode='numeric'
      {...props}
    />
  )
}

export default Cep
