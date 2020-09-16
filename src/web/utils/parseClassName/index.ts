export default function ({ touched, focus, valid, invalid, append = '' }) {
  const classNames = [append]

  if (focus) {
    classNames.push('focus')
  }

  if (invalid && touched) {
    classNames.push('invalid')
  }

  if (valid && touched) {
    classNames.push('valid')
  }

  if (touched) {
    classNames.push('touched')
  }

  return classNames.join(' ')
}
