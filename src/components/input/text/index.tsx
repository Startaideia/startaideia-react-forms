import React, { useState } from "react"
import { useField } from "hooks"
import { Message, Input, Field, Label } from "styles"
import * as availableRules from "rules"
import Mask from "string-mask"
import _ from "lodash"
import { Col } from "react-grid-system"

interface Props {
  name: string
  label?: string
  [x: string]: any
}

function Text({ name, label, xs = 12, sm, md, lg, xl, xxl, ...rest }: Props) {
  const [rules] = useState(_.pick(rest, _.keys(availableRules)))
  const { onChange, getValue, validate } = useField(name, rules)
  const [errors, setErrors] = useState<String[] | null>(null)
  const [touched, setTouched] = useState(false)

  const props: { [x: string]: any } = _.omit(rest, _.keys(availableRules))

  function handleChange(e: any) {
    let value = e.target.value
    if (props.mask) {
      value = Mask.apply(value.replace(/[^\d\p{L}]/g, ""), props.mask)
    }
    onChange(value)
    setErrors(validate())
  }

  function handleBlur() {
    setTouched(true)
    if (!touched) {
      setErrors(validate())
    }
  }

  function isInvalid(): boolean {
    return touched && !!errors
  }

  function isValid(): boolean {
    return touched && !errors
  }

  const validProps = {
    valid: isValid(),
    invalid: isInvalid(),
  }

  return (
    <Col xs={xs} sm={sm} md={md} lg={lg} xl={xl} xxl={xxl}>
      <Field {...validProps}>
        {label && <Label {...validProps}>{label}</Label>}
        <Input
          name={name}
          onChange={handleChange}
          onBlur={handleBlur}
          value={getValue()}
          {...validProps}
          {...props}
        />
        {touched &&
          errors?.map((error, key) => (
            <Message {...validProps} key={key}>
              {error}
            </Message>
          ))}
      </Field>
    </Col>
  )
}

export default Text
