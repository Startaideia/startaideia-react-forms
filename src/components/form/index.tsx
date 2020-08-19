import React, { useContext } from "react"
import { FormProvider, FormContext } from "providers"
import { Form as StyledForm } from "styles"
import { Container, Row, Col } from "react-grid-system"

interface Props {
  inititalValue?: any
  onSubmit?: (data: any) => void | Promise<void>
  [x: string]: any
}

function FormInner({ onSubmit, children }: Props) {
  const { state, setState } = useContext(FormContext)

  async function handleSubmit(e: any) {
    e.preventDefault()

    setState({ ...state, isLoading: true })

    if (!onSubmit) return

    await onSubmit({ ...state.currentValue })

    setState({ ...state, isLoading: false })
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Container>
        <Row>{children}</Row>
      </Container>
    </StyledForm>
  )
}

function Form({ initialValue, children, ...props }: Props) {
  return (
    <FormProvider initialValue={initialValue}>
      <FormInner {...props}>{children}</FormInner>
    </FormProvider>
  )
}

Form.Footer = function ({ xs = 12, children }: Props) {
  return <Col xs={xs}>{children}</Col>
}

export default Form
