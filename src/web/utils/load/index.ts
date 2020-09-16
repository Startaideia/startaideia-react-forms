import get from 'lodash/get'

import { defaultTheme } from 'web/themes'

export default function (key: string, defaultValue = '') {
  return function ({ theme }) {
    return get(theme, key, get(defaultTheme, key, defaultValue))
  }
}
