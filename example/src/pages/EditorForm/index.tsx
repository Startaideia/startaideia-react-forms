import React from 'react'

import { Submit, Form, Editor } from '@startaideia/react-forms'

function EditorForm() {
  return (
    <Form>
      <Editor
        label='Comentário'
        help='Deixe seu comentário'
        props={{ rows: 20 }}
        initialValue='O que você achou?'
        isRequired
      />
      <Form.Footer>
        <Submit>Enviar</Submit>
      </Form.Footer>
    </Form>
  )
}

export default EditorForm
