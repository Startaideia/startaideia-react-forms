import React from 'react'
import { Form, Select, Submit } from 'react-forms'

const data = [
  {
    label: 'Masculino',
    value: 'M'
  },
  {
    label: 'Feminino',
    value: 'F'
  }
]

function SelectForm() {
  return (
    <Form onSubmit={(values) => console.log(values)}>
      <Select
        name='gender'
        label='Sexo'
        isRequired
        help='Você não precisa se identificar com a opção selecionada'
      >
        {data.map(({ label, value }) => (
          <Select.Option key={value} label={label} value={value} />
        ))}
      </Select>
      <Form.Footer>
        <Submit>Enviar</Submit>
      </Form.Footer>
    </Form>
  )
}

export default SelectForm
