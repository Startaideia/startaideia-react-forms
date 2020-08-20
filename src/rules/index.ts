export { default as isRequired } from "./isRequired"
export { default as isLength } from "./isLength"
export { default as isPhone } from "./isPhone"
export { default as isEqual } from "./isEqual"
export { default as isEmail } from "./isEmail"
export { default as isCPF } from "./isCPF"

export interface Rule {
  name: string
  value: any
  params?: any
}
