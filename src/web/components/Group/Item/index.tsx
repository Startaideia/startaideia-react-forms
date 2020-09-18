import React, { useContext } from 'react'
import GroupContext from 'web/providers/GroupProvider/context'

function Item({ value: itemValue = '', children }) {
  const params = useContext(GroupContext)
  const { handleSelection } = params

  return <span onClick={() => handleSelection(itemValue)}>{children}</span>
}

export default Item
