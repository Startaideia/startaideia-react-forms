import React from "react"
import { Form, Input, Button } from "@startaideia/react-forms"
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
          <Button type="submit">Entrar</Button>
        </Form.Footer>
      </Form>
    </ThemeProvider>
  )
}

export default App
