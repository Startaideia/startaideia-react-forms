import { FormContext } from 'packages/core'
import { useContext, useMemo } from 'react'

export default function () {
  const { controls } = useContext(FormContext)

  /* Computed validation state */
  const validationState = useMemo(
    function () {
      if (!controls) return 'VALID'

      const hasInvalid = controls.find((c) => c.state === 'INVALID')
      if (hasInvalid) return 'INVALID'

      const hasPending = controls.find((c) => c.state === 'PENDING')
      if (hasPending) return 'PENDING'

      return 'VALID'
    },
    [controls]
  )

  /* Computed is valid */
  const isValid = useMemo(
    function () {
      switch (validationState) {
        case 'VALID':
          return true
        case 'INVALID':
          return false
        case 'PENDING':
          return false
      }
    },
    [validationState]
  )

  return {
    validationState,
    isValid
  }
}
