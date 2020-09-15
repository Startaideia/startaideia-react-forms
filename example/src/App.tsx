import React from 'react'

import { Form, Input, Shape, Submit } from 'react-forms'

const App = () => {
  return (
    <Form onSubmit={(data) => console.log(data)}>
      <Input.Text
        label='Nome'
        name='name'
        minLength={6}
        maxLength={16}
        isRequired
      />
      <Input.Text
        label='CPF'
        name='cpf'
        mask='###.###.###-##'
        isCpf
        isRequired
        props={{ maxLength: 14 }}
      />

      <Shape path='user'>
        <Input.Text isRequired isEmail name='email' label='E-mail' />
        <Input.Text isRequired xs={6} name='password' label='Senha' />
        <Input.Text
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

export default App
