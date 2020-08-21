import React from "react"
import Text from "../text"

interface Props {
  [x: string]: any
}

/**
 * Password default field
 *
 * @param {Props} { ...props }
 * @returns
 */
function Password({ ...props }: Props) {
  return (
    <Text
      isRequired
      isLength={{ min: 6, max: 16 }}
      name="password"
      type="password"
      label="Senha"
      maxLength={16}
      {...props}
    />
  )
}

export default Password
