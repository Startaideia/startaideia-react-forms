import { Rule } from "rules"
import equals from "validator/lib/equals"

export default function ({ value, params }: Rule): string | null {
  const isEquals = equals(value, params as string)

  if (!isEquals) {
    return "O valor deste campo está incorreto"
  }

  return null
}
