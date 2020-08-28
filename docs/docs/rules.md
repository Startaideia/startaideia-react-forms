---
id: rules
title: Rules
sidebar_label: Rules
---

## isRequired

Indicates that a input is required

```jsx title="Usage: "
<Input.Text isRequired>
<Input.Text isRequired={true}> // Optional syntax
<Input.Text isRequired={false}> // Optional for non-required fields
```

## isEqual

Check if a field has a specific value

```jsx title="Usage: "
<Input.Text isEqual="must_be_3"> // True when the input is "must_be_3"
```

## isLength

Check for the input length

```jsx title="Usage: "
<Input.Text isLentgh={false}> // Disable the rule
<Input.Text isLentgh={{ min: 6 }}> // Must be equal or gratter than 6 char
<Input.Text isLentgh={{ max: 16 }}> // Must be qual or less than 6 char
<Input.Text isLentgh={{ min: 6, max: 16 }}> // Must have between 6 and 16 chars, inclusive
```

## isEmail

Check if the input is a valid email

```jsx title="Usage: "
<Input.Text isEmail>
<Input.Text isEmail={true}> // Optional syntax
<Input.Text isEmail={false}> // Disable the rule
```

## isPhone

Check if the input is phone

```jsx title="Usage: "
// country: if must contains country code
// phone: if is a house phone
// mobile: if is a mobile phone
// mask: if is a masked input
<Input.Text isPhone={{ country: false, phone: true, mobile: true, mask: false }}>
```

## isCPF

Check if it is a valid CPF

```jsx title="Usage: "
<Input.Text isCPF>
<Input.Text isCPF={true}> // Optional syntax
<Input.Text isCPF={false}> // Disable the rule
```

## isCNPJ

Check if it is a valid CNPJ

```jsx title="Usage: "
<Input.Text isCNPJ>
<Input.Text isCNPJ={true}> // Optional syntax
<Input.Text isCNPJ={false}> // Disable the rule
```

## isCPFCNPJ

Check if it is a valid CPF or CNPJ

```jsx title="Usage: "
<Input.Text isCPFCNPJ>
<Input.Text isCPFCNPJ={true}> // Optional syntax
<Input.Text isCPFCNPJ={false}> // Disable the rule
```

## isDate

Check if it is a valid date

```jsx title="Usage: "
  <Input.Text isDate="YYYY/MM/DD"> // Default format is DD/MM/YYYY
```

## isAge

Used in Date fields, check for min and max ages

```jsx title="Usage: "
  <Input.Date isAge={{ min: 18 }}>
  <Input.Date isAge={{ max: 60 }}>
  <Input.Date isAge={{ min: 18, max: 60 }}>
```
