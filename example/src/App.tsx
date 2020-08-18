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
      <h1>it works</h1>
      <Input.Text name="user.email" />
      <Input.Text name="user.password" />
      <button type="submit">Entrar</button>
    </Form>
  )
}

export default App
