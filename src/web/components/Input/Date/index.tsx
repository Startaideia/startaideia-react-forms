import React from 'react'
import Text from '../Text'

function Date({ ...props }) {
  return (
    <Text
      mask='##/##/####'
      inputmode='numeric'
      name='date'
      props={{ maxLength: 10 }}
      isDate='DD/MM/YYYY'
      {...props}
    />
  )
}

export default Date
