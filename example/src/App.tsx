import React from "react"
import { Form, Input } from "@startaideia/react-forms"
import { ThemeProvider } from "styled-components"

const initialValue = {
  email: "email@email.com",
}

const App = () => {
  function onSubmit(data: any) {
    console.log(data)
  }
  return (
    <ThemeProvider theme={{}}>
      <Form onSubmit={onSubmit} initialValue={initialValue}>
        <Input.CPF md={6} />
        <Input.Email md={6} />
        <Input.Password />
        <Form.Footer>
          <button type="submit">Entrar</button>
        </Form.Footer>
      </Form>
    </ThemeProvider>
  )
}

export default App
