import isEmpty from 'validator/es/lib/isEmpty'
import trim from 'validator/es/lib/trim'

export default function (value: any) {
  return isEmpty(trim(value))
}
