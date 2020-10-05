import React, { useContext, useEffect } from 'react'
import { Container, Row, Col } from 'react-grid-system'

import { FormProvider, FormContext } from 'packages/core'

function FormConsumer({ theme = '', className = '', onChange, children }) {
  const { formData, handleSubmit } = useContext(FormContext)

  /* Handle formData chage */
  useEffect(
    function () {
      if (onChange) {
        onChange(formData)
      }
    },
    [onChange, formData]
  )

  return (
    <form
      className={`stf-default-theme ${theme} ${className}`}
      onSubmit={handleSubmit}
    >
      <Container>
        <Row>{children}</Row>
      </Container>
    </form>
  )
}

function Form({
  onSubmit = undefined,
  onChange = undefined,
  initialValue = {},
  className = '',
  theme = '',
  children,
  ...props
}: any) {
  return (
    <FormProvider onSubmit={onSubmit} initialValue={initialValue} {...props}>
      <FormConsumer theme={theme} className={className} onChange={onChange}>
        {children}
      </FormConsumer>
    </FormProvider>
  )
}

Form.Footer = Col
Form.Row = Row
Form.Col = Col

export default Form
