import React, { useEffect, useState } from 'react'

import { Form, Input, Shape } from 'react-forms'

const App = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('Agatha Ellen')

  useEffect(function () {
    setTimeout(function () {
      setEmail('gu.boas13@gmail.com')
    }, 5000)
    setTimeout(function () {
      setName('Gustavo Vilas Boas')
    }, 5000)
  }, [])

  return (
    <Form
      initialValue={{ name, user: { email } }}
      onSubmit={(data) => console.log(data)}
    >
      <Input.Text name='name' initialValue={email} />

      <Shape path='user'>
        <Input.Text isRequired isEmail name='email' />
        <Input.Text xs={6} name='password' />
        <Input.Text xs={6} name='password_confirmation' />
      </Shape>

      <Form.Footer>
        <button>Submit</button>
      </Form.Footer>
    </Form>
  )
}

export default App
