import React, { useEffect, useState } from 'react'

import { Form, Input, Shape } from 'react-forms'

const App = () => {
  const [email, setEmail] = useState('agathaemm@gmail.com')
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
    <Form initialValue={{ name }} onSubmit={(data) => console.log(data)}>
      <Input.Text name='name' initialValue={email} />

      <Shape path='user'>
        <Input.Text name='email' initialValue={email} />
        <Input.Text name='password' />
      </Shape>

      <button>Submit</button>
    </Form>
  )
}

export default App
