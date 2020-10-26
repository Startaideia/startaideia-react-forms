import React, { useCallback, useMemo, useState } from 'react'
import { Col } from 'react-grid-system'

import { applyMask, useValidation, useControl } from 'packages'
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
  help = undefined,
  append = undefined,
  prepend = undefined,
  placeholder = '',
  inputmode = 'text',
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
    () => parseClassName({ valid, focus, touched, invalid, append, prepend }),
    [focus, touched, invalid, valid]
  )

  /* Handle mask */
  const handleMask = useCallback(
    function (value) {
      if (mask) {
        if (typeof mask === 'string') {
          return applyMask(mask, value)
        } else {
          return mask(value)
        }
      }
      return value
    },
    [mask]
  )

  /**
   * Handle input change
   *
   */
  const handleChange = useCallback(
    function (e) {
      setValue(e.target.value)
      if (onChange) onChange(e.target.value)
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
      <div className={`stf-form-group ${className}`}>
        {label && (
          <label className={`stf-form-label ${className}`}>{label}</label>
        )}
        <div className='stf-flex'>
          {prepend && <div className='stf-form-addon prepend'>{prepend}</div>}
          <input
            className={`stf-form-control ${className}`}
            placeholder={placeholder}
            inputMode={inputmode}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={handleMask(value || '')}
            type={type}
            {...props}
          />
          {append && <div className='stf-form-addon  append'>{append}</div>}
        </div>
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
      </div>
    </Col>
  )
}

export default Text
