import React from 'react'

import { Container, Circle } from './styles'
import { useGroup } from 'web/hooks'
import Item from '../Item'

function Checkbox({ label = '', value, children = undefined }) {
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

export default Checkbox
