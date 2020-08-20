import isLength from "validator/lib/isLength"
import trim from "validator/lib/trim"
import { Rule } from "rules"

export default function ({ value, params }: Rule): String | null {
  const str = trim(String(value))
  const { exact } = params

  if (str.length === 0) return null

  if (exact && str.length === exact) {
    return null
  } else if (exact && str.length !== exact) {
    return `O campo precisa ter ${exact} caracteres`
  }

  if (!isLength(str, params as any)) {
    const { min, max }: any = params
    if (min && max) {
      return `O campo precisa ter entre ${min} e ${max} caracteres`
    } else if (min) {
      return `O campo precisa ter no mínimo ${min} caracteres`
    } else {
      return `O campo precisa ter no máximo ${max} caracteres`
    }
  }

  return null
}
