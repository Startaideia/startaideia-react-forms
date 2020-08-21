export function parseClassName({ errors, touched, focus }: any): string {
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

  return className.join(" ")
}

export function matches(needle: string, haystask: string): boolean {
  return haystask.toLowerCase().indexOf(needle.toLowerCase()) !== -1
}
