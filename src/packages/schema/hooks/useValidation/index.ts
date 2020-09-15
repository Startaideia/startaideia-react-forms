import { useCallback, useContext, useEffect, useMemo, useState } from 'react'

import { isEmpty } from 'packages/schema/helpers'
import { FormContext } from 'packages/core'
import get from 'lodash/get'

export default function (name: string, rules: any = {}) {
  const [errors, setErrors] = useState<string[]>([])
  const params = useContext(FormContext)

  /* Mount field full path reference */
  const path = useMemo(
    function () {
      return params.path ? `${params.path}.${name}` : name
    },
    [params.path, name]
  )

  const currentValue = useMemo(
    function () {
      return get(params.formData, path, '')
    },
    [path, params.formData]
  )

  /* Validate the field propertie */
  const validate = useCallback(
    async function () {
      params.setProps(path, 'PENDING', 'state')

      const errors: string[] = []

      if (rules?.isRequired && isEmpty(currentValue)) {
        params.setProps(path, 'INVALID', 'state')

        return setErrors([`Invalid rule: isRequired`])
      } else if (!rules?.isRequired && isEmpty(currentValue)) {
        params.setProps(path, 'VALID', 'state')

        return setErrors([])
      }

      for (const ruleName in rules) {
        try {
          const rule = (await import(`validator/lib/${ruleName}`)).default

          if (!(await rule(currentValue))) {
            errors.push(`Invalid rule: ${ruleName}`)
          }
        } catch (e) {}
      }

      params.setProps(path, errors.length ? 'INVALID' : 'VALID', 'state')
      setErrors(errors)
    },
    [currentValue, rules]
  )

  useEffect(
    function () {
      params.setProps(path, 'VALID', 'state')
      validate()
    },
    [currentValue]
  )

  return {
    validate,
    errors,
    path
  }
}
