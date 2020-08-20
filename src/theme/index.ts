import INITIAL_THEME from "./default"
import _ from "lodash"

export function getColor({ theme, invalid, valid }: any): string {
  if (valid) {
    return get("colors.valid")({ theme })
  }
  if (invalid) {
    return get("colors.invalid")({ theme })
  }
  return get("colors.black")({ theme })
}

export function get(key: string): any {
  return function ({ theme }: any) {
    return _.get(theme, key, _.get(INITIAL_THEME, key))
  }
}

export default INITIAL_THEME
