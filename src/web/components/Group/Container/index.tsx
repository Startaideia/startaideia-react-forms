import { useControl, useValidation } from 'packages'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Col } from 'react-grid-system'
import remove from 'lodash/remove'

import { GroupProvider } from 'web/providers'
import { parseClassName } from 'web/utils'

function Container({
  name,
  label = '',
  initialValue = '',
  sm = undefined,
  md = undefined,
  lg = undefined,
  xl = undefined,
  xs = 12,
  help = undefined,
  multiple = false,
  children,
  ...rest
}) {
  const { setValue, value } = useControl(name, { initialValue })
  const { errors, valid, invalid } = useValidation(name, rest)
  const [touched, setTouched] = useState<boolean>(false)
  const mounted = useRef<boolean>()

  /* First error */
  const error = useMemo(() => errors[0], [errors])

  /* Input class name */
  const className = useMemo(
    () =>
      parseClassName({
        valid,
        focus,
        touched,
        invalid,
        append: null,
        prepend: null
      }),
    [valid, invalid, focus, touched]
  )

  /**
   * Handle input selection
   *
   */
  const handleSelection = useCallback(
    function (itemValue) {
      if (multiple) {
        if (value.indexOf(itemValue) !== -1) {
          return setValue(remove([...value], (v) => v !== itemValue))
        } else {
          return setValue([...value, itemValue])
        }
      }
      return value === itemValue ? setValue('') : setValue(itemValue)
    },
    [setValue, value]
  )

  /**
   * Handle touched attribute
   *
   */
  useEffect(
    function () {
      if (mounted.current) {
        setTouched(true)
        return
      }
      mounted.current = true
    },
    [value]
  )

  /**
   * Check if an option is selected
   *
   */
  const isSelected = useCallback(
    function (itemValue) {
      if (multiple) {
        return value.indexOf(itemValue) !== -1
      }
      return itemValue === value
    },
    [value]
  )

  return (
    <GroupProvider value={{ handleSelection, isSelected, multiple }}>
      <Col xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
        <div className={`stf-form-group ${className}`}>
          {label && (
            <label className={`stf-form-label ${className}`}>{label}</label>
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
          <div className='stf-flex stf-flex-column'>{children}</div>
        </div>
      </Col>
    </GroupProvider>
  )
}

export default Container as any
