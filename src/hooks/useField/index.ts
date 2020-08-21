import { useContext, useEffect } from "react"
import { validationService } from "services"
import { FormContext } from "providers"
import _ from "lodash"

interface IField {
  onChange: (value: any) => void
  getValue: () => any
  getRules: () => { [x: string]: any }
  validate: () => String[] | null
  value: any
}

export default function (name: string, rules = {}): IField {
  const { state, setState } = useContext(FormContext)
  const innerState = { ...state }

  function onChange(value: any) {
    setState({ ..._.set(innerState, `currentValue.${name}`, value) })
  }

  function getValue(): any {
    const defaultValue = _.get(innerState, `initialValue.${name}`, "")
    return _.get(innerState, `currentValue.${name}`, defaultValue)
  }

  function getRules(): { [x: string]: any } {
    return _.get(innerState, `validationRules.${name}`, {})
  }

  function validate(): String[] | null {
    const isValid = validationService.validate(name, getValue(), rules)
    setState((oldState) => {
      return {
        ...oldState,
        validationState: {
          ...oldState.validationState,
          [name]: !isValid,
        },
      }
    })
    return isValid
  }

  useEffect(() => {
    setState((oldState) => {
      const fields = [...oldState.fields, name]
      return {
        ..._.set(oldState, `currentValue.${name}`, getValue()),
        ..._.set(oldState, `validationRules.${name}`, rules),
        fields,
      }
    })
    validate()
  }, [name, rules])

  return {
    onChange,
    getValue,
    getRules,
    validate,
    value: getValue(),
  }
}
