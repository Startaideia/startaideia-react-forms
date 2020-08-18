import React from "react"
import { useField } from "hooks"
import { Input, Field, Label } from "styles"

interface Props {
  name: string
  label?: string
  [x: string]: any
}

function Text({ name, label, ...props }: Props) {
  const { onChange, getValue } = useField(name)

  return (
    <Field>
      {label && <Label>{label}</Label>}
      <Input
        name={name}
        onChange={(e) => onChange(e.target.value)}
        value={getValue()}
        {...props}
      />
    </Field>
  )
}

export default Text
