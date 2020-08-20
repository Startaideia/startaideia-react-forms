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
      <Input.CPF name="user.cpf" md={6} />
      <Input.Email md={6} disabled />
      <Input.Phone label="Telefone Fixo" md={6} name="phone" mobile={false} />
      <Input.Phone
        label="Telefone Fixo + País"
        name="phone_country"
        country
        md={6}
        mobile={false}
      />

      <Input.Phone label="Celular" md={6} name="mobile" phone={false} />
      <Input.Phone
        label="Celular + País"
        name="mobile_country"
        country
        md={6}
        phone={false}
      />

      <Input.Phone label="Celular ou Telefone" name="phone_complete" md={6} />
      <Input.Phone
        label="Celular ou Telefone + Paìs"
        name="phone_complete_contry"
        md={6}
        country
      />

      <Input.Password isRequired={false} />

      <Input.CEP />

      <Form.Footer>
        <Button.Submit text="Entrar" />
      </Form.Footer>
    </Form>
  )
}

export default App
