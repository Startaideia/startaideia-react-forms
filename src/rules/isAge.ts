import { Rule } from "./index"
import moment from "moment"

export default function ({ value, params }: Rule): string | null {
  const { min, max, format } = params

  const age = moment(new Date()).diff(moment(value, format), "years")

  if (min && min > age) {
    return `A idade mínima é ${min}`
  }

  if (max && max < age) {
    return `A idade máxima é ${max}`
  }

  return null
}
