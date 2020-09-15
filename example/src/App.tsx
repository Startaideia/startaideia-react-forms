import React from 'react'

import { Form, Input, Shape } from 'react-forms'

const App = () => {
  return (
    <Form onSubmit={(data) => console.log(data)}>
      <Input.Text
        label='Nome'
        name='name'
        equals='nome'
        isLength={{ min: 6 }}
      />
      <Input.Text
        label='CPF'
        name='cpf'
        mask='###.###.###-##'
        isCpf
        props={{ maxLength: 14 }}
      />

      <Shape path='user'>
        <Input.Text isRequired isEmail name='email' label='E-mail' />
        <Input.Text xs={6} name='password' label='Senha' />
        <Input.Text
          xs={6}
          name='password_confirmation'
          label='Confirme a senha'
        />
      </Shape>

      <Form.Footer>
        <button>Submit</button>
      </Form.Footer>
    </Form>
  )
}

export default App
