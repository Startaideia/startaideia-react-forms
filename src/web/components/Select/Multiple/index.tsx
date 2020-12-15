import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Col } from 'react-grid-system'

import { SelectProvider } from 'web/providers'
import { useControl } from 'packages/core'
import { parseClassName } from 'web/utils'
import { useValidation } from 'packages'

function Multiple({
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
  const [showDropDown, setShowDropDown] = useState<boolean>(false)
  const { errors, valid, invalid } = useValidation(name, rest)
  const [searchString, setSearchString] = useState<string>('')
  const [selectedItem, setSelectedItem] = useState<any[]>([])
  const [touched, setTouched] = useState<boolean>(false)
  const [focus, setFocus] = useState<boolean>(false)
  const inputRef = useRef<any>()

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
    [valid, append, prepend, invalid, focus, touched]
  )

  /**
   * Handle input focus
   *
   */
  const handleFocus = useCallback(
    function () {
      setFocus(true)
      setShowDropDown(true)
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
      return selectedItem?.map((s) => s.label).join(', ') || ''
    },
    [searchString, selectedItem, focus]
  )

  /**
   * Handle click outside to close modal
   *
   */
  function handleClickOutside(e) {
    if (!inputRef?.current?.contains(e.target)) {
      setShowDropDown(false)
    }
  }

  /**
   * Register click outside event
   *
   */
  useEffect(function () {
    document.addEventListener('mousedown', handleClickOutside)
    return function () {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <SelectProvider
      value={{
        setSelectedItem,
        setSearchString,
        multiple: true,
        selectedItem,
        searchString,
        setValue,
        value
      }}
    >
      <Col xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
        <div className={`stf-form-group ${className}`} ref={inputRef}>
          {label && (
            <label htmlFor={name} className={`stf-form-label ${className}`}>
              {label}
            </label>
          )}
          <div className='stf-flex'>
            {prepend && <div className='stf-form-addon prepend'>{prepend}</div>}
            <input
              onChange={(e) => setSearchString(e.target.value)}
              className={`stf-form-control ${className}`}
              onFocus={handleFocus}
              onBlur={handleBlur}
              id={name}
              value={inputValue}
            />
            {append && <div className='stf-form-addon  append'>{append}</div>}
          </div>
          <div
            className={`stf-dropdown  ${className} ${
              showDropDown && 'visible'
            }`}
          >
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

export default Multiple as any
