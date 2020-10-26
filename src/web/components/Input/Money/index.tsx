import React from 'react'
import Text from '../Text'

function format(str) {
  const number = parseInt(str.toString().replace(/[\D]+/g, ''))

  if (isNaN(number)) {
    return ''
  }

  return (
    'R$ ' +
    (number / 100)
      .toFixed(2)
      .replace('.', ',')
      .replace(/(\d)(?=(\d{3})+,)/g, '$1.')
  )
}

function Money({ ...props }) {
  function handleMask(value) {
    return format(value)
  }

  return <Text mask={handleMask} {...props} />
}

export default Money as any
