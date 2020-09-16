export default function ({
  append,
  touched,
  focus,
  valid,
  prepend,
  invalid,
  prefix = ''
}) {
  const classNames = [prefix]

  if (append) {
    classNames.push('append')
  }
  if (prepend) {
    classNames.push('prepend')
  }
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
