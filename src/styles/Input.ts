import styled from "styled-components"
import { get } from "theme"

const Input: any = styled.input`
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 0px;
  outline: none;
  padding: 0px 10px;
  font-family: ${get("fonts.body")};
  color: ${get("colors.black")};
  font-size: ${get("fontSize.sm")};
  transition: 0.25s;
  flex-grow: 1;

  &:focus {
    border-color: ${get("colors.primary")};
  }

  &.is-invalid {
    color: ${get("colors.invalid")};
    border-color: ${get("colors.invalid")};
  }

  &.is-valid {
    color: ${get("colors.valid")};
    border-color: ${get("colors.valid")};
  }

  &.has-before-icon {
    padding-left: 30px;
  }

  ${get("components.input")}
`

export default Input
