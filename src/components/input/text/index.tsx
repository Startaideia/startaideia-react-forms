import React from "react"
import { useField } from "hooks"
import { Input } from "styles"

interface Props {
  name: string
  [x: string]: any
}

function Text({ name, ...props }: Props) {
  const { onChange, getValue } = useField(name)

  return (
    <Input
      name={name}
      onChange={(e) => onChange(e.target.value)}
      value={getValue()}
      {...props}
    />
  )
}

export default Text
