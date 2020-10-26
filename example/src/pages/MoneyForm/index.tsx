import React from 'react'

import { Submit, Form, Input } from '@startaideia/react-forms'

function MoneyForm() {
  return (
    <Form>
      <Input.Money name='money' label='Dinheiro' isRequired />
      <Form.Footer>
        <Submit>Enviar</Submit>
      </Form.Footer>
    </Form>
  )
}

export default MoneyForm
