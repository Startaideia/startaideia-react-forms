import React from 'react'
import Text from '../Text'

function format(str) {
  return (
    'R$ ' +
    (parseInt(str.replace(/[\D]+/g, '')) / 100)
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
