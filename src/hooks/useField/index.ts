import { useContext, useEffect } from "react"
import { FormContext } from "providers"
import _ from "lodash"

interface IField {
  onChange: (value: any) => void
  getValue: () => any
}

export default function (name: string): IField {
  const { state, setState } = useContext(FormContext)
  const innerState = { ...state }

  function onChange(value: any) {
    setState(_.set(innerState, `currentValue.${name}`, value))
  }

  function getValue(): any {
    const defaultValue = _.get(innerState, `initialValue.${name}`, "")
    return _.get(innerState, `currentValue.${name}`, defaultValue)
  }

  useEffect(() => {
    setState({
      ..._.set(innerState, `currentValue.${name}`, getValue()),
    })
  }, [name])

  return {
    onChange,
    getValue,
  }
}
