import React from 'react'
import Text from '../Text'

function Password({ ...props }) {
  return (
    <Text
      name='password'
      type='password'
      isLength={{ min: 6, max: 16 }}
      props={{ maxLength: 16 }}
      label='Senha'
      {...props}
    />
  )
}

export default Password
