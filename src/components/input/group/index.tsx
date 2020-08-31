import React, { useState } from "react"
import GroupContext from "./context"
import { Field, Label } from "styles"
import { Col, Row } from "react-grid-system"
import * as availableRules from "rules"
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

function Group({ name, children, ...rest }: any) {
  const [rules] = useState(_.pick(rest, _.keys(availableRules)))
  const props = _.omit(rest, _.keys(availableRules))

  return (
    <GroupContext.Provider value={{ name, rules }}>
      <Inner {...props}>{children}</Inner>
    </GroupContext.Provider>
  )
}

export default Group
