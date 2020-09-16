import React from 'react'
import Text from '../Text'

function Email({ ...props }) {
  return (
    <Text
      name='email'
      placeholder='joe@doe.com'
      label='E-mail'
      type='email'
      isEmail
      {...props}
    />
  )
}

export default Email
