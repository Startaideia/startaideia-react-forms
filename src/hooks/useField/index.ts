import { useContext, useEffect } from "react"
import { FormContext } from "providers"
import _ from "lodash"

export default function (name: string) {
  const { state, setState } = useContext(FormContext)

  function handleChange(value: any) {
    setState({ ..._.set({ ...state }, `currentValue.${name}`, value) })
  }

  function getValue() {
    return _.get({ ...state }, `currentValue.${name}`, "")
  }

  useEffect(() => {
    setState({ ..._.set({ ...state }, `currentValue.${name}`, "") })
  }, [name])

  return {
    handleChange,
    getValue,
  }
}
