import React from 'react'

import { Container, Circle } from './styles'
import { useGroup } from 'web/hooks'
import Item from '../Item'

function Switch({ label = '', value, children = undefined }) {
  const { isSelected } = useGroup(value)

  return (
    <Item value={value}>
      <Container>
        <Circle>
          <div className={`${isSelected && 'actived'} pill`} />
        </Circle>
        {children || label}
      </Container>
    </Item>
  )
}

export default Switch
