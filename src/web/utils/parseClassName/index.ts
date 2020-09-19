export default function ({
  touched = undefined,
  prepend = undefined,
  invalid = undefined,
  append = undefined,
  focus = undefined,
  valid = undefined,
  prefix = ''
}: any) {
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
