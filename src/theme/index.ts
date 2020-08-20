import INITIAL_THEME from "./default"
import _ from "lodash"

export function get(key: string): any {
  return function ({ theme }: any) {
    return _.get(theme, key, _.get(INITIAL_THEME, key, ""))
  }
}

export default INITIAL_THEME
