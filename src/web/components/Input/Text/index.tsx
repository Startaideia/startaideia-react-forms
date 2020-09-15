import React, { useCallback } from 'react'
import { useControl } from 'packages/core'
import { useValidation } from 'packages'
import { Col } from 'react-grid-system'

function Text({
  name,
  initialValue = '',
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
      <fieldset>
        <legend>Campo</legend>
        <input onChange={handleChange} value={value} />
        {errors.map(function (error, key) {
          return <p key={key}>{error}</p>
        })}
      </fieldset>
    </Col>
  )
}

export default Text
