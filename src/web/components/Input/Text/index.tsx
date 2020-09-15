import React, { useCallback } from 'react'
import { Col } from 'react-grid-system'

import { applyMask, useValidation, useControl } from 'packages'
import { Field, Input, Label } from './styles'

function Text({
  name,
  type = 'text',
  initialValue = '',
  mask = '#',
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
  const { errors } = useValidation(name, rest)

  const handleChange = useCallback(
    function (e) {
      setValue(applyMask(mask, e.target.value))
    },
    [setValue]
  )

  return (
    <Col xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
      <Field>
        {label && <Label>{label}</Label>}
        <Input type={type} onChange={handleChange} value={value} {...props} />
        {errors.map(function (error, key) {
          return <p key={key}>{error}</p>
        })}
      </Field>
    </Col>
  )
}

export default Text
