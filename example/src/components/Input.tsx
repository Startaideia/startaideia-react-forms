import React, { useEffect } from 'react'
import { useField } from 'react-forms'

function Input({ name, initialValue = '' }) {
  const { field, updateValue } = useField(name)

  useEffect(
    function () {
      updateValue(initialValue)
    },
    [updateValue, initialValue]
  )

  function handleChange(e) {
    updateValue(e.target.value)
  }

  return <input onChange={handleChange} value={field?.value || ''} />
}

export default Input
