import React, { useContext, useEffect, useMemo } from 'react'
// import unionBy from 'lodash/unionBy'
import remove from 'lodash/remove'

import SelectContext from 'web/providers/SelectProvider/context'
import { Item } from './styles'
import { unionBy } from 'lodash'

function Option({ value: optionValue, label, children = undefined }) {
  const params = useContext(SelectContext)
  const { setSelectedItem } = params
  const { searchString } = params
  const { setValue } = params
  const { multiple } = params
  const { value } = params

  /**
   * Indicates if should display the item
   *
   */
  const display = useMemo(
    function () {
      if (!label) {
        return true
      }
      return label.toLowerCase().indexOf(searchString.toLowerCase()) !== -1
    },
    [label, searchString]
  )

  /**
   * Handle field selection
   *
   */
  function handleSelection() {
    if (multiple) {
      if (value.indexOf(optionValue) !== -1) {
        return setValue(remove([...value], (v) => v !== optionValue))
      } else {
        return setValue([...value, optionValue])
      }
    }

    return setValue(optionValue)
  }

  /**
   * Check if the option is selected
   *
   */
  const selected = useMemo(
    function () {
      if (multiple) {
        return value.indexOf(optionValue) !== -1
      }
      return value === optionValue
    },
    [value, optionValue]
  )

  /**
   * Handle multiple selection
   *
   */
  function handleMultipleSelection() {
    if (value.indexOf(optionValue) !== -1) {
      setSelectedItem(function (previous) {
        return unionBy([...previous, { value: optionValue, label }], 'value')
      })
    } else {
      setSelectedItem(function (previous) {
        return remove(
          [...previous, { value: optionValue, label }],
          (v) => v.value !== optionValue
        )
      })
    }
  }

  /**
   * Listen to values changes
   *
   */
  useEffect(
    function () {
      if (multiple) {
        handleMultipleSelection()
      } else {
        if (value === optionValue) {
          setSelectedItem({ value: optionValue, label })
        }
      }
    },
    [value]
  )

  return display ? (
    <Item className={`${selected && 'selected'}`} onMouseDown={handleSelection}>
      {children || label}
    </Item>
  ) : null
}

export default Option
