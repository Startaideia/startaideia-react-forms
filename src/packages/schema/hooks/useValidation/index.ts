import { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import get from 'lodash/get'

import { isEmpty } from 'packages/schema/helpers'
import { FormContext } from 'packages/core'
import config from 'packages/config'

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

  /* Mount the current field value */
  const currentValue = useMemo(
    function () {
      return get(params.formData, path, '')
    },
    [path, params.formData]
  )

  /* Validate the field propertie */
  const validate = useCallback(
    async function () {
      // Load the validation messages
      const locale: string = config.get('app.locale', 'pt_BR')
      const { messages } = config.get(`lang.${locale}`, {})

      // Sets default state as peding until finish the validation
      params.setProps(path, 'PENDING', 'state')

      // Default errors aray
      const errors: string[] = []

      // Check if is required and empty
      if (rules?.isRequired && isEmpty(currentValue)) {
        params.setProps(path, 'INVALID', 'state')
        return setErrors([messages?.isRequired || 'Invalid rule: isRequired'])
      }

      // Check if it is not required but is empty
      else if (!rules?.isRequired && isEmpty(currentValue)) {
        params.setProps(path, 'VALID', 'state')
        return setErrors([])
      }

      // Run all rules async
      for (const ruleName in rules) {
        try {
          const rule = (await import(`validator/lib/${ruleName}`)).default

          if (!(await rule(currentValue))) {
            errors.push(messages[ruleName] || `Invalid rule: ${ruleName}`)
          }
        } catch (e) {}
      }

      // Set the final validation state
      params.setProps(path, errors.length ? 'INVALID' : 'VALID', 'state')

      // Set all found errors
      setErrors(errors)
    },
    [currentValue, rules]
  )

  /* run the validation every time the value is updated */
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
