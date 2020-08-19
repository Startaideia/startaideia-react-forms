import isEmail from "validator/lib/isEmail"
import { Rule } from "./index"

export default function ({ value }: Rule) {
  const str: string = value.replace(/\s/g, "")

  if (str.length === 0) return null

  if (!isEmail(str)) {
    return "Não é um e-mail válido"
  }

  return null
}
