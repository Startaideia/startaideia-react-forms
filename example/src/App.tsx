import React from "react"
import { Form, Input } from "@startaideia/react-forms"

const initialValue = {
  email: "email@email.com",
}

const App = () => {
  function onSubmit(data: any) {
    console.log(data)
  }
  return (
    <Form onSubmit={onSubmit} initialValue={initialValue}>
      <Input.CPF md={6} />
      <Input.Email md={6} />
      <Input.Password />
      <Form.Footer>
        <button type="submit">Entrar</button>
      </Form.Footer>
    </Form>
  )
}

export default App
