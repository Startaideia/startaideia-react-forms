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

function Example() {
  return (
    <Form onSubmit={(info: any) => console.log(info)}>
      <Input.CPF />

      <Input.Group
        isRequired
        orientation="horizontal"
        name="gender_group"
        label="Sexo"
      >
        <Input.Checkbox xs={6} text="Feminino" value="F" />
        <Input.Checkbox xs={6} text="Masculino" value="M" />
      </Input.Group>

      <Form.Footer>
        <Button.Submit text="Entrar" />
      </Form.Footer>
    </Form>
  )
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
    <React.Fragment>
      <Form onSubmit={onSubmit}>
        <Input.CPFCNPJ />
        <Input.CNPJ />

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

        <Input.Password isRequired={false} />
        <Input.CEP />

        <Input.Select
          label="Sexo"
          placeholder="Sexo"
          name="gender"
          source={dataSet}
        />

        <Input.Checkbox name="remember_me" text="Mantenha-me conectado" />

        <Input.Date name="birth_date" label="Aniversário" sm={6} />
        <Input.Date
          name="birth_date_vote"
          isAge={{ min: 18, max: 60 }}
          label="Aniversário (entre 18 e 60)"
          sm={6}
        />
        <Input.Date
          name="birth_date_vote_2"
          isAge={{ min: 18 }}
          label="Aniversário (min 18)"
          sm={6}
        />
        <Input.Date
          name="birth_date_vote_3"
          isAge={{ max: 60 }}
          label="Aniversário (max 60)"
          sm={6}
        />
        <Form.Footer>
          <Button.Submit text="Entrar" />
        </Form.Footer>
      </Form>
      <Example />
    </React.Fragment>
  )
}

export default App
