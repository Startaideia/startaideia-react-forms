import { useCallback, useContext, useEffect, useMemo } from 'react'

import { FormContext } from 'core/shared/contexts'
import { Field } from 'core/shared/models'

export default function (name: string) {
  const params = useContext(FormContext)
  const { path: contextPath } = params
  const { createField } = params
  const { removeField } = params
  const { updateField } = params
  const { fields } = params

  const path = useMemo(
    function () {
      return contextPath ? `${contextPath}.${name}` : name
    },
    [contextPath, name]
  )

  useEffect(
    function () {
      createField(new Field({ name, path }))
      return function () {
        removeField(new Field({ name, path }))
      }
    },
    [createField]
  )

  const updateValue = useCallback(
    function (value: string) {
      updateField(new Field({ name, path, value }))
    },
    [updateField]
  )

  const field = useMemo(
    function () {
      return fields.find((f) => f.path === path)
    },
    [fields, path]
  )

  return {
    updateField,
    updateValue,
    field
  }
}
