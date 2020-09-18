import React from 'react'
import { Form, Group, Input, Submit } from 'react-forms'

function GroupForm() {
  return (
    <React.Fragment>
      <Form onSubmit={(values) => console.log(values)}>
        <Group
          name='category'
          label='Categoria'
          help='Este campo é obrigatório'
          isRequired
          multiple
        >
          <Group.Radio value='A' label='item 1' />
          <Group.Radio value='B' label='item 2' />
        </Group>
        <Form.Footer>
          <Submit>Enviar</Submit>
        </Form.Footer>
      </Form>

      <Form onSubmit={(values) => console.log(values)}>
        <Group
          name='gender'
          label='Sexo'
          help='Este campo é obrigatório'
          isRequired
        >
          <Group.Checkbox value='F' label='Femino' />
          <Group.Checkbox value='M' label='Masculino' />
          <Group.Checkbox value='O' label='Outros' />
        </Group>
        <Form.Footer>
          <Submit>Enviar</Submit>
        </Form.Footer>
      </Form>

      <Form onSubmit={(values) => console.log(values)}>
        <Group
          name='skills'
          label='Habilidades'
          help='Quais dessas habilidades você tem?'
          multiple
        >
          <Group.Checkbox value='node' label='Node' />
          <Group.Checkbox value='java' label='Java' />
          <Group.Checkbox value='php' label='PHP' />
          <Group.Checkbox value='c#' label='C#' />
        </Group>
        <Form.Footer>
          <Submit>Enviar</Submit>
        </Form.Footer>
      </Form>

      <h2>Login form</h2>
      <Form onSubmit={(values) => console.log(values)}>
        <Input.Email isRequired />
        <Input.Password />
        <Group name='terms_and_conditions' isRequired>
          <Group.Radio
            value='on'
            label='Declaro que li os termos e condições'
          />
        </Group>
        <Form.Footer>
          <Submit>Enviar</Submit>
        </Form.Footer>
      </Form>
    </React.Fragment>
  )
}

export default GroupForm
