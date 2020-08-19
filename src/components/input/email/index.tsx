import React from "react"
import Text from "../text"

interface Props {
  [x: string]: any
}

function Email({ ...props }: Props) {
  return <Text isEmail name="email" type="email" label="E-mail" {...props} />
}

export default Email
