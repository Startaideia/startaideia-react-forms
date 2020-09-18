import React from 'react'
import { Form, Select, Shape, Submit } from 'react-forms'
import { FaUser } from 'react-icons/fa'

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

const skills = [
  'PHP',
  'Node',
  'Angular',
  'React',
  'Vue',
  'Javascript',
  'Laravel',
  'Spring'
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
            prepend={<FaUser />}
            append={<FaUser />}
            help='Você não precisa se identificar com a opção selecionada'
          >
            {data.map(({ label, value }) => (
              <Select.Option key={value} value={value}>
                <a href='https://google.com.br'>{label}</a>
              </Select.Option>
            ))}
          </Select>
        </Shape>
        <Form.Footer>
          <Submit>Enviar</Submit>
        </Form.Footer>
      </Form>

      <h2>Select múltiplo</h2>
      <Form onSubmit={(values) => console.log(values)}>
        <Select.Multiple
          prepend={<FaUser />}
          label='Habilidades'
          name='skills'
          isRequired
        >
          {skills.map((value) => (
            <Select.Option key={value} label={value} value={value} />
          ))}
        </Select.Multiple>
        <Form.Footer>
          <Submit>Enviar</Submit>
        </Form.Footer>
      </Form>
    </React.Fragment>
  )
}

export default SelectForm
