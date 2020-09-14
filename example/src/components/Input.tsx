import React, { useEffect } from 'react'
import { useField } from 'react-forms'
import './index.css'

function isRequired(field) {
  if (field.value.length > 0) {
    return null
  }
  return { isRequired: 'Esse campo é obrigatório' }
}

function isUnique(field) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      if (field.value === '654321') {
        return resolve({ isUnique: 'Essa campo precisa ser unico' })
      }
      return resolve(null)
    }, 1000)
  })
}

function Input({ name, rules = [], initialValue = '' }) {
  const { field, updateInitialValue, updateValue } = useField(name, [
    ...rules,
    isRequired,
    isUnique
  ])

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

  return (
    <React.Fragment>
      <input onChange={handleChange} value={field?.value || ''} />
      {field?.errors.map(function (error, key) {
        const [errorKey] = Object.keys(error)
        return <p key={key}>{error[errorKey]}</p>
      })}
    </React.Fragment>
  )
}

export default Input
