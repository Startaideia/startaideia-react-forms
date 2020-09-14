import React, { useState } from 'react'

import { Form, Shape } from 'react-forms'
import { Input } from './components'

const App = () => {
  const [email] = useState('gu.boas13@gmail.com')

  return (
    <Form
      initialValue={{ user: { email } }}
      onSubmit={(data) => console.log(data)}
    >
      <Shape path='user'>
        <Input name='email' initialValue='outro@email.com' />
        <Input name='password' />
      </Shape>

      <Input name='password' initialValue='654321' />

      <button>Submit</button>
    </Form>
  )
}

export default App
