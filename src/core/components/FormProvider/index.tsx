import React, { useCallback, useEffect, useMemo, useState } from 'react'
import unionBy from 'lodash/unionBy'
import remove from 'lodash/remove'
import set from 'lodash/set'
import get from 'lodash/get'

import { FormContext } from 'core/shared/contexts'
import { IFormProps } from 'core/types'
import { Field } from 'core/shared/models'

function FormProvider({ onChange, children, ...props }: IFormProps) {
  const [fields, setFields] = useState<Field[]>([])
  const { initialValue = {} } = props

  /* Form validation state */
  const formValidationState = useMemo(
    function () {
      for (const field of fields) {
        if (field.validationState === 'pending') {
          return 'pending'
        }
        if (field.validationState === 'invalid') {
          return 'invalid'
        }
      }
      return 'valid'
    },
    [fields]
  )

  /* Get form current value */
  const getFormValue = useCallback<() => any>(
    function () {
      const output = {}
      fields.forEach(function (field) {
        set(output, field.path, field.value || '')
      })
      return output
    },
    [fields]
  )

  /* Handle field creation */
  const createField = useCallback<(field: Field) => void>(
    function (field: Field) {
      field.value = get(initialValue, field.path, field.value)
      setFields(function (previousFields): Field[] {
        return [...previousFields, field]
      })
      field.validate().then(function () {
        setFields(function (previousFields): Field[] {
          return unionBy([field, ...previousFields], 'path')
        })
      })
    },
    [setFields]
  )

  /* Handle remove field */
  const removeField = useCallback<(field: Field) => void>(function (
    field: Field
  ) {
    setFields(function (previousFields): Field[] {
      return [...remove(previousFields, (n) => n.path === field.path)]
    })
  },
  [])

  /* Handle field update */
  const updateField = useCallback<(field: Field) => void>(function (
    field: Field
  ) {
    setFields(function (previousFields): Field[] {
      return unionBy([field, ...previousFields], 'path')
    })
    field.validate().then(function () {
      setFields(function (previousFields): Field[] {
        return unionBy([field, ...previousFields], 'path')
      })
    })
  },
  [])

  /* Handle onchange event */
  useEffect(
    function () {
      if (onChange) {
        onChange(getFormValue())
      }
    },
    [onChange, fields]
  )

  return (
    <FormContext.Provider
      value={{
        formValidationState,
        getFormValue,
        initialValue,
        createField,
        updateField,
        removeField,
        path: '',
        fields
      }}
    >
      {children}
    </FormContext.Provider>
  )
}

export default FormProvider
