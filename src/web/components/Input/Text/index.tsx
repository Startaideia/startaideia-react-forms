import React, { useCallback } from 'react'

import { IFieldProps } from 'web/types'
import { bootRules, useField } from 'core'

function Text({ name, rules = {} }: IFieldProps) {
  const { updateValue } = useField(name, bootRules(rules))

  const handleChange = useCallback(
    function (e) {
      updateValue(e.target.value)
    },
    [updateValue]
  )

  return <input onChange={handleChange} />
}

export default Text
