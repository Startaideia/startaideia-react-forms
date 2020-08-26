import { Rule } from "rules"
import trim from "validator/lib/trim"
import isCNPJ from "./isCNPJ"
import isCPF from "./isCPF"

export default function ({ value }: Rule): String | null {
  const str = trim(String(value)).replace(/[^\d\p{L}]/g, "")

  if (str.length === 0) return null

  if (str.length <= 11) {
    return isCPF({ value: str } as Rule)
  }

  return isCNPJ({ value: str } as Rule)
}
