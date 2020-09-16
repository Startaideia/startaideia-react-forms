import moment from 'moment'

export default function (value, params) {
  const { max, format, unit = 'years' } = params

  const age = moment(new Date()).diff(moment(value, format), unit)

  if (max && max < age) {
    return false
  }

  return true
}
