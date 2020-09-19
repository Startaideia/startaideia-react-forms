import React from 'react'

import { useGroup } from 'web/hooks'
import Item from '../Item'

function Switch({ label = '', value, children = undefined }) {
  const { isSelected } = useGroup(value)

  return (
    <Item value={value}>
      <div className='stf-dropdown-item'>
        <div className={`stf-switch ${isSelected && 'actived'}`}>
          <div className={`${isSelected && 'actived'} pill`} />
        </div>
        {children || label}
      </div>
    </Item>
  )
}

export default Switch
