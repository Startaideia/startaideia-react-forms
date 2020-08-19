import { Rule } from "./index"

export default function ({ value }: Rule): String | null {
  const str: string = String(value).replace(/\s/g, "")

  if (str.length === 0) {
    return "Campo obrigatório"
  }

  return null
}
