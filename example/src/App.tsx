import React from "react"
import { Form, Input } from "@startaideia/react-forms"

const initialValue = {
  email: "email@email.com",
}

const App = () => {
  return (
    <Form initialValue={initialValue}>
      <h1>it works</h1>
      <Input.Text name="email" />
    </Form>
  )
}

export default App
