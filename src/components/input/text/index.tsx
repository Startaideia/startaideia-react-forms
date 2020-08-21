import React, { useState } from "react"
import { Message, Input, Field, Label } from "styles"
import { Col } from "react-grid-system"
import * as availableRules from "rules"
import { utilService } from "services"
import { useField } from "hooks"
import Mask from "string-mask"
import _ from "lodash"

interface Props {
  name: string
  label?: string
  [x: string]: any
}

function Text({ name, label, mask, ...rest }: Props) {
  const [rules] = useState(_.pick(rest, _.keys(availableRules)))
  const [sizes] = useState(_.pick(rest, ["xs", "sm", "md", "lg", "xl", "xxl"]))

  const { onChange, getValue, validate } = useField(name, rules)
  const [errors, setErrors] = useState<String[] | null>(null)
  const [focus, setFocus] = useState<boolean>(false)
  const [touched, setTouched] = useState(false)

  const props: { [x: string]: any } = _.omit(rest, _.keys(availableRules))
  const className = utilService.parseClassName({ errors, touched, focus })

  function handleChange(e: any) {
    let value = e.target.value
    if (mask) {
      const unmaskedValue = value.replace(/[^\d\p{L}]/g, "")
      if (typeof mask === "string") {
        value = Mask.apply(unmaskedValue, mask)
      } else {
        value = mask(unmaskedValue)
      }
    }
    onChange(value)
    setErrors(validate())
  }

  function handleBlur() {
    setTouched(true)
    setFocus(false)
    if (!touched) {
      setErrors(validate())
    }
  }

  return (
    <Col {...sizes}>
      <Field className={className}>
        {label && <Label className={className}>{label}</Label>}
        <Input
          name={name}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={() => setFocus(true)}
          value={getValue()}
          className={className}
          {...props}
        />
      </Field>
      {touched &&
        errors?.map((error, key) => (
          <Message className={className} key={key}>
            {error}
          </Message>
        ))}
    </Col>
  )
}

export default Text
