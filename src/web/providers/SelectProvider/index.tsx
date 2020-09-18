import React from 'react'
import SelectContext from './context'

function SelectProvider({ children, ...props }: any) {
  return <SelectContext.Provider {...props}>{children}</SelectContext.Provider>
}

export default SelectProvider
