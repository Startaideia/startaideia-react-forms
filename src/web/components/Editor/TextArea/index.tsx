import React, { useCallback, useMemo, useState } from 'react'
import { Col } from 'react-grid-system'

import { Input, Field, Label, Help, Error } from './styles'
import { useValidation } from 'packages/schema'
import { parseClassName } from 'web/utils'
import { useControl } from 'packages/core'

function TextArea({
  name,
  type = 'text',
  initialValue = '',
  label = '',
  placeholder = '',
  xs = 12,
  sm = undefined,
  md = undefined,
  lg = undefined,
  xl = undefined,
  onChange = undefined,
  onFocus = undefined,
  onBlur = undefined,
  help = undefined,
  props,
  ...rest
}: any) {
  const { setValue, value } = useControl(name, { initialValue })
  const { errors, valid, invalid } = useValidation(name, rest)
  const [touched, setTouched] = useState<boolean>(false)
  const [focus, setFocus] = useState<boolean>(false)

  /* First error */
  const error = useMemo(() => errors[0], [errors])

  /* Input class name */
  const className = useMemo(
    () => parseClassName({ valid, focus, touched, invalid } as any),
    [focus, touched, invalid, valid]
  )

  /**
   * Handle input change
   *
   */
  const handleChange = useCallback(
    function (e) {
      setValue(e.target.value)
      if (onChange) {
        onChange(e.target.value)
      }
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
      if (onFocus) {
        onFocus()
      }
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
      if (onBlur) {
        onBlur()
      }
    },
    [setFocus, setTouched]
  )

  return (
    <Col xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
      <Field>
        {label && <Label className={className}>{label}</Label>}
        {touched && invalid && <Error className={className}>{error}</Error>}
        {!(touched && invalid) && help && <Help>{help}</Help>}
        <Input
          onBlur={handleBlur}
          onChange={handleChange}
          onFocus={handleFocus}
          value={value}
          className={className}
          placeholder={placeholder}
          {...props}
        >
          {value}
        </Input>
      </Field>
    </Col>
  )
}

export default TextArea
