import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Col } from 'react-grid-system'

import {
  Dropdown,
  Field,
  Input,
  Label,
  Help,
  Error,
  Group,
  Addon
} from './styles'
import { SelectProvider } from 'web/providers'
import { useControl } from 'packages/core'
import { parseClassName } from 'web/utils'
import { useValidation } from 'packages'

function Multiple({
  name,
  label = '',
  initialValue = '',
  xs = 12,
  sm = undefined,
  md = undefined,
  lg = undefined,
  xl = undefined,
  onFocus = undefined,
  onBlur = undefined,
  children,
  append = undefined,
  prepend = undefined,
  help = undefined,
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
        <Field className={className} ref={inputRef}>
          {label && <Label className={className}>{label}</Label>}
          <Group>
            {prepend && <Addon className='prepend'>{prepend}</Addon>}
            <Input
              className={className}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={(e) => setSearchString(e.target.value)}
              value={inputValue}
            />
            {append && <Addon className='append'>{append}</Addon>}
          </Group>
          <Dropdown className={`${className} ${showDropDown && 'visible'}`}>
            {children}
          </Dropdown>
          {touched && invalid && <Error className={className}>{error}</Error>}
          {!(touched && invalid) && help && <Help>{help}</Help>}
        </Field>
      </Col>
    </SelectProvider>
  )
}

export default Multiple as any
