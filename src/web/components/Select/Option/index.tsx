import React, { useContext, useEffect, useMemo } from 'react'

import SelectContext from 'web/providers/SelectProvider/context'
import { Item } from './styles'

function Option({ value: optionValue, label }) {
  const { setSelectedItem, searchString, setValue, value } = useContext(
    SelectContext
  )

  /**
   * Indicates if should display the item
   *
   */
  const display = useMemo(
    function () {
      return label.toLowerCase().indexOf(searchString.toLowerCase()) !== -1
    },
    [label, searchString]
  )

  /**
   * Listen to values changes
   *
   */
  useEffect(
    function () {
      if (value === optionValue) {
        setSelectedItem({ value: optionValue, label })
      }
    },
    [value]
  )

  /**
   * Handle field selection
   *
   */
  function handleSelection() {
    setValue(optionValue)
  }

  return display ? <Item onMouseDown={handleSelection}>{label}</Item> : null
}

export default Option
