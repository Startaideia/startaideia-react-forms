import trim from 'lodash/trim'

export default function (value: string, length) {
  return trim(value).length >= length
}
