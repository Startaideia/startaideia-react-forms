import React, { useCallback, useMemo, useState } from 'react'
import { Col } from 'react-grid-system'

import { applyMask, useValidation, useControl } from 'packages'
import { Field, Input, Label, Error } from './styles'

function Text({
  name,
  type = 'text',
  initialValue = '',
  mask = '',
  label = '',
  xs = 12,
  sm = undefined,
  md = undefined,
  lg = undefined,
  xl = undefined,
  props,
  ...rest
}: any) {
  const { setValue, value } = useControl(name, { initialValue })
  const [touched, setTouched] = useState<boolean>(false)
  const { errors, invalid } = useValidation(name, rest)

  const error = useMemo(() => errors[0], [errors])

  const handleChange = useCallback(
    function (e) {
      if (mask) {
        return setValue(applyMask(mask, e.target.value))
      }
      return setValue(e.target.value)
    },
    [setValue]
  )

  return (
    <Col xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
      <Field>
        {label && <Label>{label}</Label>}
        <Input
          type={type}
          onBlur={() => setTouched(true)}
          onChange={handleChange}
          value={value}
          {...props}
        />
        {touched && invalid && <Error>{error}</Error>}
      </Field>
    </Col>
  )
}

export default Text
