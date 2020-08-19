import React, { useState } from "react"
import { useField } from "hooks"
import { Input, Field, Label } from "styles"
import * as availableRules from "rules"
import _ from "lodash"

interface Props {
  name: string
  label?: string
  [x: string]: any
}

function Text({ name, label, ...rest }: Props) {
  const [rules] = useState(_.pick(rest, _.keys(availableRules)))
  const { onChange, getValue, validate } = useField(name, rules)
  const [errors, setErrors] = useState<String[] | null>([])
  const [touched, setTouched] = useState(false)

  const props = _.omit(rest, _.keys(availableRules))

  function handleChange(e: any) {
    onChange(e.target.value)
    if (touched) {
      setErrors(validate())
    }
  }

  function handleBlur() {
    setTouched(true)
    if (!touched) {
      setErrors(validate())
    }
  }

  return (
    <Field>
      {label && <Label>{label}</Label>}
      <Input
        name={name}
        onChange={handleChange}
        onBlur={handleBlur}
        value={getValue()}
        {...props}
      />
      {errors?.map((error, key) => (
        <p key={key}>{error}</p>
      ))}
    </Field>
  )
}

export default Text
