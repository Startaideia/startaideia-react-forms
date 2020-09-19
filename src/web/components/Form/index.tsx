import React, { useContext } from 'react'
import { Container, Row, Col } from 'react-grid-system'

import { FormProvider, FormContext } from 'packages/core'

function FormConsumer({ children }) {
  const { handleSubmit } = useContext(FormContext)

  return (
    <form onSubmit={handleSubmit}>
      <Container>
        <Row>{children}</Row>
      </Container>
    </form>
  )
}

function Form({
  onSubmit = undefined,
  children,
  initialValue = {},
  ...props
}: any) {
  return (
    <FormProvider onSubmit={onSubmit} initialValue={initialValue} {...props}>
      <FormConsumer>{children}</FormConsumer>
    </FormProvider>
  )
}

Form.Footer = Col
Form.Row = Row
Form.Col = Col

export default Form
