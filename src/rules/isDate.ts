import { Rule } from "./index"
import isDate from "validator/lib/isDate"
import trim from "validator/lib/trim"

export default function ({ value, params }: Rule): string | null {
  const str = trim(value)

  if (str.length === 0) {
    return null
  }

  if (!isDate(str, params || "DD/MM/YYYY")) {
    return "Não é uma data válida"
  }

  return null
}
