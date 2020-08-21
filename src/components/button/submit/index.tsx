import React, { useContext } from "react"
import { Button } from "styles"
import { FormContext } from "providers"

interface Props {
  [x: string]: any
}

/**
 * Default submit button
 *
 */
function Submit({ text, ...props }: Props) {
  const {
    isValid,
    state: { isLoading },
  } = useContext(FormContext)

  return (
    <Button disabled={!isValid() || isLoading} type="submit" {...props}>
      {text}
    </Button>
  )
}

export default Submit
