import { FormContext } from 'core/shared/contexts'
import { useCallback, useContext, useEffect, useMemo } from 'react'

export default function (name: string) {
  const params = useContext(FormContext)
  const { createField } = params
  const { removeField } = params
  const { updateField } = params
  const { fields } = params

  useEffect(
    function () {
      createField({ name })
      return function () {
        removeField({ name })
      }
    },
    [createField]
  )

  const updateValue = useCallback(
    function (value: string) {
      updateField({ name, value })
    },
    [updateField]
  )

  const field = useMemo(
    function () {
      return fields.find((f) => f.name === name)
    },
    [fields, name]
  )

  return {
    updateField,
    updateValue,
    field
  }
}
