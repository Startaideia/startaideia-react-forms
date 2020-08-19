import * as availableRules from "rules"

interface Rules {
  [x: string]: any
}

export function validate(
  name: string,
  value: any,
  rules: Rules
): String[] | null {
  const errors: String[] = []

  for (const rule in rules) {
    const result = availableRules[rule]({ name, value, params: rules[rule] })
    if (result) {
      errors.push(result)
    }
  }

  return errors.length > 0 ? errors : null
}
