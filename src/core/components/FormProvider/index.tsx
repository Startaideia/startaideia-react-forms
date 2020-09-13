import React, { useCallback, useEffect, useState } from 'react'
import unionBy from 'lodash/unionBy'
import remove from 'lodash/remove'
import set from 'lodash/set'

import { FormContext } from 'core/shared/contexts'
import { IField, IFormProps } from 'core/types'

function FormProvider({ onChange, children }: IFormProps) {
  const [fields, setFields] = useState<IField[]>([])

  /* Get form current value */
  const getFormValue = useCallback<() => any>(
    function () {
      const output = {}
      fields.forEach(function (field) {
        set(output, field.path, field.value)
      })
      return output
    },
    [fields]
  )

  /* Handle field creation */
  const createField = useCallback<(field: IField) => void>(
    function (field: IField) {
      setFields(function (previousFields): IField[] {
        return [...previousFields, field]
      })
    },
    [setFields]
  )

  /* Handle remove field */
  const removeField = useCallback<(field: IField) => void>(function (
    field: IField
  ) {
    setFields(function (previousFields): IField[] {
      return [...remove(previousFields, (n) => n.name === field.name)]
    })
  },
  [])

  /* Handle field update */
  const updateField = useCallback<(field: IField) => void>(function (
    field: IField
  ) {
    setFields(function (previousFields): IField[] {
      return unionBy([field, ...previousFields], 'name')
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
        getFormValue,
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
