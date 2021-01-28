import React from 'react'

import { Form, Input, Shape, Submit } from '@startaideia/react-forms'
import { FaUser } from 'react-icons/fa'

function SimpleForm() {
  return (
    <React.Fragment>
      <Form theme='dark' onSubmit={(data) => console.log(data)}>
        <Input.Text
          label='Nome'
          name='name'
          minLength={6}
          maxLength={16}
          append={<FaUser />}
          prepend={<FaUser />}
        />

        <Input.CpfCnpj />
        <Input.Cnpj />
        <Input.Cpf />

        <Input.Hidden name='hidden' initialValue={2} />

        <Input.Date
          label='Data de Nascimento'
          minAge={{ min: 16, format: 'DD/MM/YYYY' }}
          maxAge={{ max: 30, format: 'DD/MM/YYYY' }}
        />

        <Shape path='user'>
          <Input.Email help='Será o e-mail utilizado em sua conta' isEmail />
          <Input.Password xs={6} />
          <Input.Password
            xs={6}
            name='password_confirmation'
            label='Confirme a senha'
          />
        </Shape>

        <Form.Footer>
          <Submit>Submit</Submit>
        </Form.Footer>
      </Form>

      <h2>Endereço</h2>
      <Form>
        <Input.Cep />
        <Form.Footer>
          <Submit>Entrar</Submit>
        </Form.Footer>
      </Form>
    </React.Fragment>
  )
}

export default SimpleForm
