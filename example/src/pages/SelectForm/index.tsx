import React from 'react'
import { Form, Select, Shape, Submit } from 'react-forms'

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
    <React.Fragment>
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
      <h2>Select com Shape</h2>
      <Form onSubmit={(values) => console.log(values)}>
        <Shape path='user'>
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
        </Shape>
        <Form.Footer>
          <Submit>Enviar</Submit>
        </Form.Footer>
      </Form>
    </React.Fragment>
  )
}

export default SelectForm
