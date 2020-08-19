import React, { useState } from "react"
import { useField } from "hooks"
import { Input, Field, Label } from "styles"
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
    <Col xs={xs} sm={sm} md={md} lg={lg} xl={xl} xxl={xxl}>
      <Field invalid={!!errors} valid={touched && !errors}>
        {label && (
          <Label invalid={!!errors} valid={touched && !errors}>
            {label}
          </Label>
        )}
        <Input
          name={name}
          onChange={handleChange}
          onBlur={handleBlur}
          value={getValue()}
          invalid={!!errors}
          valid={touched && !errors}
          {...props}
        />
        {errors?.map((error, key) => (
          <p key={key}>{error}</p>
        ))}
      </Field>
    </Col>
  )
}

export default Text
