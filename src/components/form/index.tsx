import React from "react"
import { FormProvider, FormContext } from "providers"
import { Form as StyledForm } from "styles"
import { Container, Row, Col } from "react-grid-system"
import { ThemeProvider } from "styled-components"
import _ from "lodash"

interface Props {
  inititalValue?: any
  onSubmit?: (data: any) => any
  [x: string]: any
}

function FormInner({ setState, state, onSubmit, children }: Props) {
  async function handleSubmit(e: any) {
    e.preventDefault()

    if (!onSubmit) return

    setState({ ...state, isLoading: true })

    const callback = await onSubmit({ ...state.currentValue })

    setState({ ...state, isLoading: false })

    if (callback) {
      callback()
    }
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
      <FormContext.Consumer>
        {({ state, setState }) => (
          <FormInner state={state} setState={setState} {...props}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
          </FormInner>
        )}
      </FormContext.Consumer>
    </FormProvider>
  )
}

Form.Footer = function ({ xs = 12, children }: Props) {
  return <Col xs={xs}>{children}</Col>
}

export default Form
