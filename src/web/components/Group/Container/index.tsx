import { useControl, useValidation } from 'packages'
import React, { useCallback, useMemo, useState } from 'react'
import { Col } from 'react-grid-system'
import remove from 'lodash/remove'

import { Field, Label, Flex, Error, Help } from './styles'
import { GroupProvider } from 'web/providers'
import { parseClassName } from 'web/utils'

function Container({
  name,
  label = '',
  initialValue = '',
  xs = 12,
  sm = undefined,
  md = undefined,
  lg = undefined,
  xl = undefined,
  children,
  help = undefined,
  multiple = false,
  ...rest
}) {
  const { setValue, value } = useControl(name, { initialValue })
  const { errors, valid, invalid } = useValidation(name, rest)
  const [touched, setTouched] = useState<boolean>(false)

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
      setTouched(true)
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
        <Field className={className}>
          {label && <Label className={className}>{label}</Label>}
          {touched && invalid && <Error className={className}>{error}</Error>}
          {!(touched && invalid) && help && <Help>{help}</Help>}
          <Flex>{children}</Flex>
        </Field>
      </Col>
    </GroupProvider>
  )
}

export default Container as any
