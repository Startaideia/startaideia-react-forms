import React from "react"
import { useField } from "hooks"

interface Props {
  name: string
  [x: string]: any
}

function Text({ name, ...props }: Props) {
  const { handleChange, getValue } = useField(name)

  function onChange(event: any) {
    handleChange(event.target.value)
  }

  return <input onChange={onChange} value={getValue()} {...props} />
}

export default Text
