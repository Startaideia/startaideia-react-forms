import { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import print from 'sprintf-js'
import get from 'lodash/get'

import {
  isEmpty,
  loadRule,
  parseParams,
  toArray
} from 'packages/schema/helpers'
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
      const { isRequired, ...rest } = rules

      // Sets default state as peding until finish the validation
      params.setProps(path, 'PENDING', 'state')

      // Default errors aray
      const errors: string[] = []

      // Check if is required and empty
      if (isRequired && isEmpty(currentValue)) {
        params.setProps(path, 'INVALID', 'state')
        return setErrors([messages?.isRequired || 'Invalid rule: isRequired'])
      }

      // Check if it is not required but is empty
      else if (!isRequired && isEmpty(currentValue)) {
        params.setProps(path, 'VALID', 'state')
        return setErrors([])
      }

      // Run all rules async
      for (const ruleName in rest) {
        try {
          const rule = await loadRule(ruleName)
          const params = parseParams(rest[ruleName])

          if (params) {
            if (!(await rule(currentValue, ...params))) {
              const message = messages[ruleName] || `Invalid rule: ${ruleName}`
              errors.push(print.vsprintf(message, toArray(rest[ruleName])))
            }
          }
        } catch (e) {
          console.log(e)
        }
      }

      // Set the final validation state
      params.setProps(path, errors.length ? 'INVALID' : 'VALID', 'state')

      // Set all found errors
      setErrors(errors)
    },
    [currentValue, rules]
  )

  /* Mount valid attribute */
  const valid = useMemo(() => errors.length === 0, [errors])

  /* Mount invalid attribute */
  const invalid = useMemo(() => !valid, [valid])

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
    invalid,
    errors,
    valid,
    path
  }
}
