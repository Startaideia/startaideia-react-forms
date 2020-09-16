import React, { useCallback, useMemo, useState } from 'react'
import { Col } from 'react-grid-system'

import { applyMask, useValidation, useControl } from 'packages'
import { Field, Input, Label, Error } from './styles'
import { parseClassName } from 'web/utils'

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
  onChange = undefined,
  onFocus = undefined,
  onBlur = undefined,
  props,
  ...rest
}: any) {
  const { setValue, value } = useControl(name, { initialValue })
  const [touched, setTouched] = useState<boolean>(false)
  const { errors, valid, invalid } = useValidation(name, rest)
  const [focus, setFocus] = useState<boolean>(false)

  /* First error */
  const error = useMemo(() => errors[0], [errors])

  /* Input class name */
  const className = useMemo(
    () => parseClassName({ valid, focus, touched, invalid }),
    [focus, touched, invalid, valid]
  )

  /**
   * Handle input change
   *
   */
  const handleChange = useCallback(
    function (e) {
      const inputValue = mask ? applyMask(mask, e.target.value) : e.target.value
      setValue(inputValue)
      if (onChange) onChange(inputValue)
    },
    [setValue]
  )

  /**
   * Handle input focus
   *
   */
  const handleFocus = useCallback(
    function () {
      setFocus(true)
      if (onFocus) onFocus()
    },
    [setFocus]
  )

  /**
   * Handle input blur
   *
   */
  const handleBlur = useCallback(
    function () {
      setTouched(true)
      setFocus(false)
      if (onBlur) onBlur()
    },
    [setFocus, setTouched]
  )

  return (
    <Col xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
      <Field className={className}>
        {label && <Label className={className}>{label}</Label>}
        <Input
          type={type}
          onBlur={handleBlur}
          onChange={handleChange}
          onFocus={handleFocus}
          value={value}
          className={className}
          {...props}
        />
        {touched && invalid && <Error className={className}>{error}</Error>}
      </Field>
    </Col>
  )
}

export default Text
