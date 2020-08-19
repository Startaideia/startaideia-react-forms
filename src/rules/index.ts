export { default as isRequired } from "./isRequired"
export { default as isLength } from "./isLength"
export { default as isEqual } from "./isEqual"
export { default as isEmail } from "./isEmail"
export { default as isCPF } from "./isCPF"

interface Props {
  [x: string]: any
}

export interface Rule {
  name: string
  value: any
  params?: Props | string | boolean
}
