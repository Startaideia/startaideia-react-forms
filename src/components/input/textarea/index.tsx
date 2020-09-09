import React, { useState, useEffect } from "react"
import { Message, Textarea as Input, Field, Label } from "styles"
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

/**
 * Default text form input
 *
 * @param {Props} { name, label, mask, ...rest }
 * @returns
 */
function Textarea({
  name,
  label,
  mask,
  defaultValue,
  capitalize = false,
  transformValue = (value: string) => value,
  onInput = (value: string) => value,
  beforeIcon,
  afterIcon,
  ...rest
}: Props) {
  const [rules] = useState(_.pick(rest, _.keys(availableRules)))
  const [sizes] = useState(_.pick(rest, ["xs", "sm", "md", "lg", "xl", "xxl"]))

  const { onChange, getValue, validate } = useField(name, rules)
  const [errors, setErrors] = useState<String[] | null>(null)
  const [focus, setFocus] = useState<boolean>(false)
  const [touched, setTouched] = useState(false)
  const [error] = errors || []

  const props = _.omit(rest, [..._.keys(rules), ..._.keys(sizes)])

  const className = utilService.parseClassName({
    beforeIcon,
    afterIcon,
    capitalize,
    touched,
    errors,
    focus,
  })

  useEffect(
    function () {
      if (!defaultValue) return

      let value = defaultValue
      if (mask) {
        const unmaskedValue = value.replace(/[^\d\p{L}]/g, "")
        if (typeof mask === "string") {
          value = Mask.apply(unmaskedValue, mask)
        } else {
          value = mask(unmaskedValue)
        }
      }
      onChange(onInput(value))
      setErrors(validate())
    },
    [defaultValue]
  )

  /**
   * Handle input change, adding it values to form context,
   * applying masks and running validations
   *
   * @param {*} e
   */
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
    onChange(onInput(value))
    setErrors(validate())
  }

  /**
   * Handle input bluer, it applies focus e touched state values
   * and run validations
   *
   */
  function handleBlur() {
    setTouched(true)
    setFocus(false)
    if (!touched) {
      setErrors(validate())
    }
  }

  return (
    <Col xs={12} {...sizes}>
      <Field className={className}>
        {label && <Label className={className}>{label}</Label>}

        {(beforeIcon || afterIcon) && (
          <div className={`icon-container ${className}`}>
            {beforeIcon || afterIcon}
          </div>
        )}
        <Input
          name={name}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={() => setFocus(true)}
          value={transformValue(getValue())}
          className={className}
          {...props}
        />
      </Field>
      {touched && error && <Message className={className}>{error}</Message>}
    </Col>
  )
}

export default Textarea
