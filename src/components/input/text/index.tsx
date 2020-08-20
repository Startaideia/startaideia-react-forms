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

function parseClassName({ errors, touched, focus }: any): string {
  const className = []

  if (focus) {
    className.push("has-focus")
  }

  if (touched && !!errors) {
    className.push("is-invalid")
  }

  if (touched && !errors) {
    className.push("is-valid")
  }

  return className.join(" ")
}

function Text({ name, label, xs = 12, sm, md, lg, xl, xxl, ...rest }: Props) {
  const [rules] = useState(_.pick(rest, _.keys(availableRules)))
  const { onChange, getValue, validate } = useField(name, rules)
  const [errors, setErrors] = useState<String[] | null>(null)
  const [focus, setFocus] = useState<boolean>(false)
  const [touched, setTouched] = useState(false)

  const props: { [x: string]: any } = _.omit(rest, _.keys(availableRules))
  const className = parseClassName({ errors, touched, focus })

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
    setFocus(false)
    if (!touched) {
      setErrors(validate())
    }
  }

  return (
    <Col xs={xs} sm={sm} md={md} lg={lg} xl={xl} xxl={xxl}>
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
        {touched &&
          errors?.map((error, key) => (
            <Message className={className} key={key}>
              {error}
            </Message>
          ))}
      </Field>
    </Col>
  )
}

export default Text
