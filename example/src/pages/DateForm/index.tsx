import React from 'react'

import { Submit, Form, Input } from '@startaideia/react-forms'

function DateForm() {
  return (
    <Form>
      <Input.Date name='birthdate' label='Data de nascimento' isRequired />
      <Form.Footer>
        <Submit>Enviar</Submit>
      </Form.Footer>
    </Form>
  )
}

export default DateForm
