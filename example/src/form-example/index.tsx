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
  const [source, setSource] = React.useState(options)
  function handleSubmit(data: any) {
    console.log(data)
    return () => alert("acabou a submissão")
  }

  React.useEffect(function () {
    setTimeout(function () {
      setSource([
        {
          label: "Masculino",
          value: "M",
        },
        {
          label: "Feminino",
          value: "F",
        },
        {
          label: "Outros",
          value: "O",
        },
      ])
    }, 5000)
  }, [])

  return (
    <Form initialValue={{}} onSubmit={handleSubmit}>
      <Input.Select
        name="gender"
        label="Sexo"
        source={source}
        defaultValue="O"
      />
      <Form.Footer>
        <Button.Submit text="Submit" />
      </Form.Footer>
    </Form>
  )
}

export default FormExample
