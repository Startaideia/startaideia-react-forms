import React from "react"

interface Props {
  [x: string]: any
}

function Form({ children }: Props) {
  return <form>{children}</form>
}

export default Form
