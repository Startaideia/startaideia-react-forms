import React from 'react'

import { useGroup } from 'web/hooks'
import Item from '../Item'

function Checkbox({ label = '', value, children = undefined }) {
  const { isSelected } = useGroup(value)

  return (
    <Item value={value}>
      <div className='stf-dropdown-item'>
        <div className='stf-checkbox'>
          {isSelected && <div className='filled' />}
        </div>
        {children || label}
      </div>
    </Item>
  )
}

export default Checkbox
