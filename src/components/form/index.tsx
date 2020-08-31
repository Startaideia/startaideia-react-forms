import React, { useContext } from "react"
import { FormProvider, FormContext } from "providers"
import { Form as StyledForm } from "styles"
import { Container, Row, Col } from "react-grid-system"
import { ThemeProvider } from "styled-components"
import _ from "lodash"

interface Props {
  inititalValue?: any
  onSubmit?: (data: any) => void | Promise<void>
  [x: string]: any
}

function FormInner({ onSubmit, children }: Props) {
  const { state, setState } = useContext(FormContext)

  async function handleSubmit(e: any) {
    e.preventDefault()

    if (!onSubmit) return

    const { fields } = state

    setState({ ...state, isLoading: true })

    const result = {}
    _.uniq(fields).forEach(function (field: string) {
      _.set(result, field, _.get(state.currentValue, field))
    })

    await onSubmit(result)

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

function Form({ initialValue, children, theme = {}, ...props }: Props) {
  return (
    <FormProvider initialValue={initialValue}>
      <FormInner {...props}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </FormInner>
    </FormProvider>
  )
}

Form.Footer = function ({ xs = 12, children }: Props) {
  return <Col xs={xs}>{children}</Col>
}

export default Form
