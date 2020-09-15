import React, { useCallback } from 'react'
import { useControl } from 'packages/core'
import { useValidation } from 'packages'

function Text({ name, initialValue = '', ...props }) {
  const { setValue, value } = useControl(name, { initialValue })
  const { errors } = useValidation(name, props)

  const handleChange = useCallback(
    function (e) {
      setValue(e.target.value)
    },
    [setValue]
  )

  return (
    <fieldset>
      <legend>Campo</legend>
      <input onChange={handleChange} value={value} />
      {errors.map(function (error, key) {
        return <p key={key}>{error}</p>
      })}
    </fieldset>
  )
}

export default Text
