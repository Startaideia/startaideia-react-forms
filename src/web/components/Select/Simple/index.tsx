import React, { useCallback, useMemo, useState } from 'react'
import { Col } from 'react-grid-system'

import { SelectProvider } from 'web/providers'
import { useControl } from 'packages/core'
import { parseClassName } from 'web/utils'
import { useValidation } from 'packages'

function Simple({
  name,
  label = '',
  initialValue = '',
  sm = undefined,
  md = undefined,
  lg = undefined,
  xl = undefined,
  xs = 12,
  prepend = undefined,
  onFocus = undefined,
  onBlur = undefined,
  append = undefined,
  help = undefined,
  children,
  ...rest
}: any) {
  const { setValue, value } = useControl(name, { initialValue })
  const { errors, valid, invalid } = useValidation(name, rest)
  const [searchString, setSearchString] = useState<string>('')
  const [selectedItem, setSelectedItem] = useState<any>(null)
  const [touched, setTouched] = useState<boolean>(false)
  const [focus, setFocus] = useState<boolean>(false)

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
        append,
        prepend
      }),
    [valid, invalid, focus, touched, append, prepend]
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
      setSearchString('')
      setTouched(true)
      setFocus(false)
      if (onBlur) onBlur()
    },
    [setFocus, setTouched]
  )

  /**
   * Search input value
   *
   */
  const inputValue = useMemo(
    function () {
      if (focus) {
        return searchString
      }
      return selectedItem?.label || ''
    },
    [searchString, selectedItem, focus]
  )

  return (
    <SelectProvider
      value={{
        setSelectedItem,
        setSearchString,
        selectedItem,
        searchString,
        setValue,
        value
      }}
    >
      <Col xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
        <div className={`stf-form-group ${className}`}>
          {label && (
            <label className={`stf-form-label ${className}`}>{label}</label>
          )}
          <div className='stf-flex'>
            {prepend && <div className='stf-form-addon prepend'>{prepend}</div>}
            <input
              onChange={(e) => setSearchString(e.target.value)}
              className={`stf-form-control ${className}`}
              onFocus={handleFocus}
              onBlur={handleBlur}
              value={inputValue}
              type='text'
            />
            {append && <div className='stf-form-addon  append'>{append}</div>}
          </div>
          <div className={`stf-dropdown ${className} ${focus && 'visible'}`}>
            {children}
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
    </SelectProvider>
  )
}

export default Simple as any
