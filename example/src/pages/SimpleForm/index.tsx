import React from 'react'

import { Form, Input, Shape, Submit } from 'react-forms'
import { FaUser } from 'react-icons/fa'

function SimpleForm() {
  return (
    <Form onSubmit={(data) => console.log(data)}>
      <Input.Text
        label='Nome'
        name='name'
        minLength={6}
        maxLength={16}
        isRequired
        append={<FaUser />}
        prepend={<FaUser />}
      />

      <Input.Cpf isRequired />

      <Input.Date
        label='Data de Nascimento'
        minAge={{ min: 16, format: 'DD/MM/YYYY' }}
        maxAge={{ max: 30, format: 'DD/MM/YYYY' }}
        isRequired
      />

      <Shape path='user'>
        <Input.Email
          help='Será o e-mail utilizado em sua conta'
          isRequired
          isEmail
        />
        <Input.Password isRequired xs={6} />
        <Input.Password
          isRequired
          xs={6}
          name='password_confirmation'
          label='Confirme a senha'
        />
      </Shape>

      <Form.Footer>
        <Submit>Submit</Submit>
      </Form.Footer>
    </Form>
  )
}

export default SimpleForm
