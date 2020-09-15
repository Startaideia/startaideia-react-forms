import React, { useContext } from 'react'

import { FormContext } from 'packages/core/providers'

function Shape({ path, children }) {
  const { path: currentPath, ...rest } = useContext(FormContext)

  return (
    <FormContext.Provider
      value={{
        ...rest,
        path: currentPath.concat(currentPath ? `.${path}` : path)
      }}
    >
      {children}
    </FormContext.Provider>
  )
}

export default Shape
