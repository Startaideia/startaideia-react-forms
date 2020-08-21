import { Rule } from "./index"

export default function ({ value }: Rule): String | null {
  if (!value) {
    return "Campo obrigatório"
  }
  const str: string = String(value).replace(/\s/g, "")

  if (str.length === 0) {
    return "Campo obrigatório"
  }

  return null
}
