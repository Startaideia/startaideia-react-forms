---
id: first-step
title: First Steps
sidebar_label: First Steps
---

import { Form, Input, Button } from "@startaideia/react-forms"

The main component of this library is **Form**. It provides a context for the inputs and can handle loading, invalid states and form submission.

Bellow, a simple example of a login form:

```jsx live
import { Form, Input, Button } from "@startaideia/react-forms"

function LoginPage() {
  function handleLogin(data) {
    console.log(data) // { email: string, passoword: string }
  }
  return (
    <Form onSubmit={handleLogin}>
      <Input.Email isRequired />
      <Input.Password />
      <Form.Footer>
        <Button.Submit text="Log In" />
      </Form.Footer>
    </Form>
  )
}
```

The code above will print the following component:

<div style={{ padding: "30px 0px" }}>
  <Form>
    <Input.Email isRequired />
    <Input.Password />
    <Form.Footer>
      <Button.Submit text="Log In" />
    </Form.Footer>
  </Form>
</div>

This is the power of [@startaideia/react-forms](https://www.npmjs.com/package/@startaideia/react-forms). With just a fill lines of code, you have a full featured form with:

- A as-you-type data validation and user validation feedback
- A simple interface to extract form data
- A submit button that is disabled if the form is not valid
- A full keyboard compatibility for mobile phone users
