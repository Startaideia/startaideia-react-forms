import React from 'react'

import { Form, Input } from 'react-forms'

const App = () => {
  return (
    <Form onSubmit={(data) => console.log(data)}>
      <Input.Text name='name' rules={{ itIsUnique: true }} />

      <button>Submit</button>
    </Form>
  )
}

export default App
