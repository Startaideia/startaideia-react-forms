import isLength from "validator/lib/isLength"
import trim from "validator/lib/trim"
import { Rule } from "rules"

export default function ({ value, params }: Rule): String | null {
  const str = trim(String(value))

  if (str.length === 0) return null

  if (!isLength(str, params)) {
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
