import React from "react"
import Text from "../text"

interface Props {
  [x: string]: any
}

function Password({ ...props }: Props) {
  return (
    <Text
      isRequired
      isLength={{ min: 6, max: 16 }}
      name="password"
      type="password"
      label="Senha"
      {...props}
    />
  )
}

export default Password
