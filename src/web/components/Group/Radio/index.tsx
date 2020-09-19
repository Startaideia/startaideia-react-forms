import React from 'react'

import { useGroup } from 'web/hooks'
import Item from '../Item'

function Radio({ label = '', value, children = undefined }) {
  const { isSelected } = useGroup(value)

  return (
    <Item value={value}>
      <div className='stf-dropdown-item'>
        <div className='stf-radio'>
          {isSelected && <div className='filled' />}
        </div>
        {children || label}
      </div>
    </Item>
  )
}

export default Radio
