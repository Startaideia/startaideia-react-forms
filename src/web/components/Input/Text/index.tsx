import React, { useCallback } from 'react'
import { Col } from 'react-grid-system'

import { Field, Input, Label } from './styles'
import { useControl } from 'packages/core'
import { useValidation } from 'packages'

function Text({
  name,
  type = 'text',
  initialValue = '',
  label = '',
  xs = 12,
  sm = undefined,
  md = undefined,
  lg = undefined,
  xl = undefined,
  ...props
}) {
  const { setValue, value } = useControl(name, { initialValue })
  const { errors } = useValidation(name, props)

  const handleChange = useCallback(
    function (e) {
      setValue(e.target.value)
    },
    [setValue]
  )

  return (
    <Col xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
      <Field>
        {label && <Label>{label}</Label>}
        <Input type={type} onChange={handleChange} value={value} />
        {errors.map(function (error, key) {
          return <p key={key}>{error}</p>
        })}
      </Field>
    </Col>
  )
}

export default Text
