---
id: inputs
title: Inputs
sidebar_label: Inputs
---

import { Form, Input } from "@startaideia/react-forms"

## Text

```jsx
<Input.Text name="name" label="Whats your name?" placeholder="Joe Doe" />
```

<Form>
  <Input.Text name="name" label="Whats your name?" placeholder="Joe Doe"/>
</Form>

## Email

```jsx
<Input.Email />
```

<Form>
  <Input.Email />
</Form>

Default input props

| Prop    | Description                               | Value  |
| ------- | ----------------------------------------- | ------ |
| name    | the input name                            | email  |
| label   | the input label                           | E-mail |
| type    | the input type                            | email  |
| isEmail | validates that the input is a valid email | true   |

## Password

```jsx
<Input.Password />
```

<Form>
  <Input.Password />
</Form>

Default input props

| Prop       | Description                        | Value           |
| ---------- | ---------------------------------- | --------------- |
| name       | the input name                     | password        |
| label      | the input label                    | Senha           |
| type       | the input type                     | password        |
| isLength   | validates that the input length    | min: 6, max: 16 |
| isRequired | validates that the input is filled | true            |

## CPF

```jsx
<Input.CPF />
```

<Form>
  <Input.CPF />
</Form>

Default input props

| Prop  | Description                           | Value |
| ----- | ------------------------------------- | ----- |
| name  | the input name                        | cpf   |
| label | the input label                       | CPF   |
| type  | the input type                        | text  |
| isCPF | validates that the input is valid CPF | true  |

## CNPJ

```jsx
<Input.CNPJ />
```

<Form>
  <Input.CNPJ />
</Form>

Default input props

| Prop   | Description                            | Value |
| ------ | -------------------------------------- | ----- |
| name   | the input name                         | cnpj  |
| label  | the input label                        | CNPJ  |
| type   | the input type                         | text  |
| isCNPJ | validates that the input is valid CNPJ | true  |

## CPF or CNPJ

```jsx
<Input.CPFCNPJ />
```

<Form>
  <Input.CPFCNPJ />
</Form>

Default input props

| Prop      | Description                                   | Value       |
| --------- | --------------------------------------------- | ----------- |
| name      | the input name                                | cpf_cnpj    |
| label     | the input label                               | CPF or CNPJ |
| type      | the input type                                | text        |
| isCPFCNPJ | validates that the input is valid CPF or CNPJ | true        |

## CEP

```jsx
<Input.CEP />
```

<Form>
  <Input.CEP />
</Form>

Default input props

| Prop     | Description                     | Value  |
| -------- | ------------------------------- | ------ |
| name     | the input name                  | cep    |
| label    | the input label                 | CEP    |
| type     | the input type                  | text   |
| isLength | validates that the input length | min: 9 |

## Phone

```jsx
<Input.Phone
  label="Telefone Fixo + País"
  name="phone_country"
  country
  mobile={false}
/>
<Input.Phone label="Celular" name="mobile" phone={false} />
<Input.Phone
  label="Celular + País"
  name="mobile_country"
  country
  phone={false}
/>
<Input.Phone label="Celular ou Telefone" name="phone_complete" />
<Input.Phone
  label="Celular ou Telefone + Paìs"
  name="phone_complete_contry"
  country
/>
```

<Form>
  <Input.Phone
    label="Telefone Fixo + País"
    name="phone_country"
    country
    mobile={false}
  />
  <Input.Phone label="Celular" name="mobile" phone={false} />
  <Input.Phone
    label="Celular + País"
    name="mobile_country"
    country
    phone={false}
  />
  <Input.Phone label="Celular ou Telefone" name="phone_complete" />
  <Input.Phone
    label="Celular ou Telefone + Paìs"
    name="phone_complete_contry"
    country
  />
</Form>

Default input props

| Prop    | Description              | Value    |
| ------- | ------------------------ | -------- |
| name    | the input name           | phone    |
| label   | the input label          | Telefone |
| type    | the input type           | phone    |
| country | if must add country code | false    |
| phone   | if is a house phone      | true     |
| mobile  | if is a mobile phone     | true     |

## Checkbox

```jsx
<Input.Checkbox name="remember_me" text="Remember me" />
```

<Form>
  <Input.Checkbox
    name="remember_me"
    text="Remember me"
  />
</Form>

## Select

```jsx
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

<Input.Select label="Sexo" name="gender" source={dataSet} />
```

<Form>
<Input.Select label="Sexo" name="gender" source={[
  {
    value: "M",
    label: "Masculino",
  },
  {
    value: "F",
    label: "Feminino",
  },
]}/>
</Form>

## Date

```jsx
<Input.Date name="birth_date" label="Aniversário" />
```

<Form>
  <Input.Date name="birth_date" label="Aniversário"/>
</Form>

Default input props

| Prop        | Description              | Value      |
| ----------- | ------------------------ | ---------- |
| mask        | the input mask           | ##/##/#### |
| inputFormat | the format used in value | YYYY/MM/DD |
| maskFormat  | the mask date format     | DD/MM/YYYY |
