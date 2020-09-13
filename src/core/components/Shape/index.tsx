import React, { useContext } from 'react'

import { IShapeProps } from 'core/types'
import { FormContext } from 'core/shared/contexts'

function Shape({ path, children }: IShapeProps) {
  const { path: contextpath, ...rest } = useContext(FormContext)

  return (
    <FormContext.Provider
      value={{
        ...rest,
        path: contextpath.concat(contextpath ? `${path}` : path)
      }}
    >
      {children}
    </FormContext.Provider>
  )
}

export default Shape
