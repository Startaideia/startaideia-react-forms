import { useCallback, useContext, useEffect, useMemo } from 'react'
import get from 'lodash/get'

import { FormContext } from 'core/shared/contexts'
import { Field } from 'core/shared/models'

export default function (name: string, validationRules: any[] = []) {
  const params = useContext(FormContext)
  const { formValidationState } = params
  const { path: contextPath } = params
  const { initialValue } = params
  const { createField } = params
  const { removeField } = params
  const { updateField } = params
  const { fields } = params

  /* Mount field full path reference */
  const path = useMemo(
    function () {
      return contextPath ? `${contextPath}.${name}` : name
    },
    [contextPath, name]
  )

  /* Find the current field by path */
  const field = useMemo(
    function () {
      return fields.find((f) => f.path === path)
    },
    [fields, path]
  )

  const errors = useMemo(
    function () {
      return fields.find((f) => f.path === path)?.errors
    },
    [fields, path]
  )

  /* Updates the field value */
  const updateValue = useCallback(
    function (value: string) {
      updateField(new Field({ name, path, validationRules, value }))
    },
    [updateField]
  )

  /* Updates field initial value */
  const updateInitialValue = useCallback(
    function (fieldValue: string) {
      const value = get(initialValue, path, fieldValue)
      updateField(new Field({ name, path, validationRules, value }))
    },
    [initialValue, updateField]
  )

  /* Create and remove field from the form */
  useEffect(
    function () {
      createField(new Field({ name, path, validationRules }))
      return function () {
        removeField(new Field({ name, path }))
      }
    },
    [createField]
  )

  return {
    formValidationState,
    updateInitialValue,
    initialValue,
    updateField,
    updateValue,
    errors,
    field
  }
}
