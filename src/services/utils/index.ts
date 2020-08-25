export function parseClassName({
  beforeIcon,
  afterIcon,
  errors,
  touched,
  focus,
}: any): string {
  const className = []

  if (focus) {
    className.push("has-focus")
  }

  if (touched && !!errors) {
    className.push("is-invalid")
  }

  if (touched && !errors) {
    className.push("is-valid")
  }

  if (beforeIcon) {
    className.push("has-icon")
    className.push("has-before-icon")
  }

  if (afterIcon) {
    className.push("has-icon")
    className.push("has-after-icon")
  }

  return className.join(" ")
}

export function matches(needle: string, haystask: string): boolean {
  return haystask.toLowerCase().indexOf(needle.toLowerCase()) !== -1
}
