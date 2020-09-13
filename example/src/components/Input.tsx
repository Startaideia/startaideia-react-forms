import React, { useEffect } from 'react'
import { useField } from 'react-forms'
import './index.css'

function Input({ name, initialValue = '' }) {
  const { field, updateInitialValue, updateValue } = useField(name)

  useEffect(
    function () {
      if (initialValue) {
        updateInitialValue(initialValue)
      }
    },
    [updateInitialValue, initialValue]
  )

  function handleChange(e) {
    updateValue(e.target.value)
  }

  return <input onChange={handleChange} value={field?.value || ''} />
}

export default Input
