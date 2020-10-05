import { useCallback, useContext, useEffect, useMemo } from 'react'
import get from 'lodash/get'

import { FormContext } from 'packages/core/providers'
import useDidMountEffect from '../useDidMountEffect'

export default function (name: string, { initialValue = '' } = {}) {
  const params = useContext(FormContext)

  /* Mount field full path reference */
  const path = useMemo(
    function () {
      return params.path ? `${params.path}.${name}` : name
    },
    [params.path, name]
  )

  /* Set the form control value */
  const setValue = useCallback(
    function (value) {
      params.setProps(path, value, 'value')
    },
    [path]
  )

  /* Gets the form control value */
  const value = useMemo(
    function () {
      return get(params.formData, path, '')
    },
    [params.formData, path]
  )

  useDidMountEffect(
    function () {
      if (initialValue) {
        setValue(initialValue)
      }
    },
    [initialValue]
  )

  useDidMountEffect(
    function () {
      if (params.initialValue) {
        const defaultValue = get(params.initialValue, path, undefined)
        if (typeof defaultValue !== 'undefined') {
          setValue(defaultValue)
        }
      }
    },
    [params.initialValue]
  )

  useEffect(
    function () {
      const defaultValue = get(params.initialValue, path, initialValue)
      params.setControl({ name, path, value: defaultValue })
      return function () {
        params.removeControl(name)
      }
    },
    [params.setControl]
  )

  return {
    setValue,
    value
  }
}
