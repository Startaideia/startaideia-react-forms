import React from 'react'
import GroupContext from './context'

function GroupProvider({ children, ...props }: any) {
  return <GroupContext.Provider {...props}>{children}</GroupContext.Provider>
}

export default GroupProvider
