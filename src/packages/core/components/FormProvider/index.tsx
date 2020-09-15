import React, { FormEvent, useCallback, useMemo, useState } from 'react'

import { FormContext } from 'packages/core/providers'
import { FormControl } from 'packages/core/models'
import unionBy from 'lodash/unionBy'
import set from 'lodash/set'

function FormProvider({ onSubmit, initialValue, children }) {
  const [controls, setControls] = useState<FormControl[]>([])

  /* Set a new form control */
  const setControl = useCallback(
    function (control: FormControl) {
      setControls(function (previousControls) {
        return [...previousControls, control]
      })
    },
    [setControls]
  )

  /* Set the field value */
  const setValue = useCallback(function (path: string, value: string) {
    setControls(function (previousControls) {
      const control = previousControls.find((c) => c.path === path)
      return unionBy(
        [{ ...control, value } as FormControl, ...previousControls],
        'path'
      )
    })
  }, [])

  /* Computed form value */
  const formData = useMemo(
    function () {
      const output = {}
      for (const control of controls) {
        set(output, control.path, control.value)
      }
      return output
    },
    [controls]
  )

  /* Handle form submit */
  const handleSubmit = useCallback(
    function (e: FormEvent) {
      if (e) e.preventDefault()
      onSubmit(formData)
    },
    [formData]
  )

  return (
    <FormContext.Provider
      value={{
        path: '',
        initialValue,
        formData,
        handleSubmit,
        setControl,
        setValue
      }}
    >
      {children}
    </FormContext.Provider>
  )
}

export default FormProvider
