import React from 'react'
import { useControl } from 'packages/core'

function Text({ name, initialValue = '' }) {
  const { setValue, value } = useControl(name, { initialValue })
  return (
    <fieldset>
      <legend>Campo</legend>
      <input onChange={(e) => setValue(e.target.value)} value={value} />
    </fieldset>
  )
}

export default Text
