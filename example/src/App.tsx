import React from "react"
import { Form, Input, Button } from "@startaideia/react-forms"
import { AiFillPhone } from "react-icons/ai"

const dataSet = [
  {
    value: "M",
    label: "Masculino",
  },
  {
    value: "F",
    label: "Feminino",
  },
]

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
    <Form onSubmit={onSubmit}>
      <Input.CPF name="user.cpf" md={6} />

      <Input.Email md={6} />

      <Input.Phone
        beforeIcon={<AiFillPhone />}
        label="Telefone Fixo"
        md={6}
        name="phone"
        mobile={false}
      />

      <Input.Phone
        afterIcon={<AiFillPhone />}
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

      <Input.Password />
      <Input.CEP />

      <Input.Select label="Sexo" name="gender" source={dataSet} isRequired />

      <Input.Checkbox
        name="remember_me"
        text="Mantenha-me conectado"
        isRequired
      />

      <Form.Footer>
        <Button.Submit text="Entrar" />
      </Form.Footer>
    </Form>
  )
}

export default App
