import React, { useState } from "react"
import { Message, Field, Label } from "styles"
import { Container, Box } from "./styles"
import { FaCheck } from "react-icons/fa"
import { Col } from "react-grid-system"
import * as availableRules from "rules"
import { utilService } from "services"
import { useField } from "hooks"
import _ from "lodash"

/**
 * Checkbox Input
 *
 * @param {*} { name, label, value = "on", text, ...rest }
 * @returns
 */
function Checkbox({ name, label, value = "on", text, ...rest }: any) {
  const [sizes] = useState(_.pick(rest, ["xs", "sm", "md", "lg", "xl", "xxl"]))
  const [rules] = useState(_.pick(rest, _.keys(availableRules)))
  const [errors, setErrors] = useState<String[] | null>(null)
  const [touched, setTouched] = useState<boolean>(false)

  const { onChange, getValue, validate } = useField(name, rules)
  const className = utilService.parseClassName({ errors, touched })

  /**
   * Check if the checkbox is checked
   *
   * @returns {boolean}
   */
  function isChecked(): boolean {
    return getValue() === value
  }

  /**
   * Handle checkbox click
   *
   */
  function handleClick() {
    onChange(isChecked() ? null : value)
    setErrors(validate())
    setTouched(true)
  }

  return (
    <Col xs={12} {...sizes}>
      <Field>
        {label && <Label>{label}</Label>}
        <Container onClick={handleClick}>
          <Box className={isChecked() ? "checked" : ""}>
            <FaCheck />
          </Box>
          {text}
        </Container>
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

export default Checkbox
