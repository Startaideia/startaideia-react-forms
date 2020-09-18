import React from 'react'

import { Container, Circle } from './styles'
import Item from '../Item'
import { useGroup } from 'web/hooks'

function Radio({ label = '', value, children = undefined }) {
  const { isSelected } = useGroup(value)

  return (
    <Item value={value}>
      <Container>
        <Circle>{isSelected && <div className='filled' />}</Circle>
        {children || label}
      </Container>
    </Item>
  )
}

export default Radio
