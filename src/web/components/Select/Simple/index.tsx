import React, { useCallback, useMemo, useState } from 'react'
import { Col } from 'react-grid-system'

import { Dropdown, Field, Input, Label, Help, Error } from './styles'
import { SelectProvider } from 'web/providers'
import { useControl } from 'packages/core'
import { parseClassName } from 'web/utils'
import { useValidation } from 'packages'

function Simple({
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
  help = undefined,
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
        append: undefined,
        prepend: undefined
      }),
    [valid, invalid, focus, touched]
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
        <Field className={className}>
          {label && <Label className={className}>{label}</Label>}
          <Input
            className={className}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={(e) => setSearchString(e.target.value)}
            value={inputValue}
          />
          <Dropdown className={`${className} ${focus && 'visible'}`}>
            {children}
          </Dropdown>
          {touched && invalid && <Error className={className}>{error}</Error>}
          {!(touched && invalid) && help && <Help>{help}</Help>}
        </Field>
      </Col>
    </SelectProvider>
  )
}

export default Simple as any
