import React, { useCallback, useMemo, useState } from 'react'

import { applyMask, useValidation, useControl } from 'packages'
import { parseClassName } from 'web/utils'

function Hidden({
  name,
  mask = '',
  initialValue = '',
  onChange = undefined,
  onFocus = undefined,
  onBlur = undefined,
  props,
  ...rest
}: any) {
  const { setValue, value } = useControl(name, { initialValue })
  const { valid, invalid } = useValidation(name, rest)
  const [touched, setTouched] = useState<boolean>(false)
  const [focus, setFocus] = useState<boolean>(false)

  /* Input class name */
  const className = useMemo(
    () => parseClassName({ value, valid, focus, touched, invalid }),
    [focus, value, touched, invalid, valid]
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
    <input
      className={`${className}`}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      value={value}
      type='hidden'
      {...props}
    />
  )
}

export default Hidden
