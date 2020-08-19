import React from "react"
import { Form, Input, Button } from "@startaideia/react-forms"

const initialValue = {
  email: "email@email.com",
}

const App = () => {
  function onSubmit(data: any) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(data)
        resolve()
      }, 1000)
    })
  }
  return (
    <Form onSubmit={onSubmit} initialValue={initialValue}>
      <Input.CPF name="user.cpf" md={6} isRequired />
      <Input.Email md={6} />
      <Input.Password />
      <Form.Footer>
        <Button.Submit text="Entrar" />
      </Form.Footer>
    </Form>
  )
}

export default App
