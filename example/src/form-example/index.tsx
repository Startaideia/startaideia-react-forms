import React from "react"
import { Form, Input, Button } from "@startaideia/react-forms"

const options = [
  {
    label: "Masculino",
    value: "M",
  },
  {
    label: "Feminino",
    value: "F",
  },
]

function FormExample() {
  function handleSubmit(data: any) {
    console.log(data)
    return () => alert("acabou a submissão")
  }
  return (
    <React.Fragment>
      <Form initialValue={{}} onSubmit={handleSubmit}>
        <Input.Select
          name="gender"
          label="Sexo"
          source={options}
          defaultValue="M"
        />
        <Form.Footer>
          <Button.Submit text="Submit" />
        </Form.Footer>
      </Form>
      <Form initialValue={{}} onSubmit={handleSubmit}>
        <Input.CPF defaultValue="44391032864" />
        <Input.Select
          defaultValue=""
          name="gender"
          label="Sexo"
          source={options}
        />
        <Form.Footer>
          <Button.Submit text="Submit" />
        </Form.Footer>
      </Form>
    </React.Fragment>
  )
}

export default FormExample
