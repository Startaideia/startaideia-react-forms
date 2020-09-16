import moment from 'moment'

export default function (value, params) {
  const { min, format, unit = 'years' } = params

  const age = moment(new Date()).diff(moment(value, format), unit)

  if (min && min > age) {
    return false
  }

  return true
}
