import { phoneService } from "services"
import { parsePhoneNumberFromString } from "libphonenumber-js"
import trim from "validator/lib/trim"
import { Rule } from "./index"

export default function ({ value, params }: Rule): String | null {
  const str = trim(String(value))

  if (str.length === 0) return null

  if (str.length < phoneService.getPhoneLength(params)) {
    return "Telefone muito curto"
  }

  const number = parsePhoneNumberFromString(str, "BR")

  if (!number?.isValid()) {
    return "Não é um telefone válido"
  }

  return null
}
