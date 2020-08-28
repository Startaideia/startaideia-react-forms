import React, { useState } from "react"
import GroupContext from "./context"
import { Field, Label } from "styles"
import { Col, Row } from "react-grid-system"
import _ from "lodash"

function Inner({ label, children, ...rest }: any) {
  const [sizes] = useState(_.pick(rest, ["xs", "sm", "md", "lg", "xl", "xxl"]))

  return (
    <Col xs={12} {...sizes}>
      <Field>
        {label && <Label>{label}</Label>}
        <Row>{children}</Row>
      </Field>
    </Col>
  )
}

function Group({ name, children, ...props }: any) {
  return (
    <GroupContext.Provider value={{ name }}>
      <Inner {...props}>{children}</Inner>
    </GroupContext.Provider>
  )
}

export default Group
