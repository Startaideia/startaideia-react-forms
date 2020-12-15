import React, { useCallback, useMemo, useState } from 'react'
import { Col } from 'react-grid-system'

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
      <div className={`stf-form-group ${className}`}>
        {label && (
          <label htmlFor={name} className={`stf-form-label ${className}`}>
            {label}
          </label>
        )}
        {touched && invalid && (
          <span className={`stf-form-text stf-text-invalid ${className}`}>
            {error}
          </span>
        )}
        {!(touched && invalid) && help && (
          <span className={`stf-form-text stf-text-muted ${className}`}>
            {help}
          </span>
        )}
        <textarea
          className={`stf-form-control ${className}`}
          placeholder={placeholder}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={value}
          id={name}
          {...props}
        >
          {value}
        </textarea>
      </div>
    </Col>
  )
}

export default TextArea
