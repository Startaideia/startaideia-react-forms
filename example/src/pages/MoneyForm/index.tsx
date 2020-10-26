import React from 'react'

import { Submit, Form, Input } from '@startaideia/react-forms'

function MoneyForm() {
  return (
    <Form initialValue={{ money: 12, money_2: 'a' }}>
      <Input.Money name='money' label='Dinheiro' isRequired />
      <Input.Money name='money_2' label='Dinheiro' isRequired />
      <Form.Footer>
        <Submit>Enviar</Submit>
      </Form.Footer>
    </Form>
  )
}

export default MoneyForm
