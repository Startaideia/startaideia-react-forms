import React from 'react'
import { useField } from 'react-forms'

function Input({ name }) {
  useField(name)

  return <input />
}

export default Input
