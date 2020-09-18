import React from 'react'

import { Form, Editor } from 'react-forms'

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
    </Form>
  )
}

export default EditorForm
