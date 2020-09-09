import styled from "styled-components"
import { get } from "theme"

const Textarea: any = styled.textarea`
  border: 1px solid #ccc;
  border-radius: 0px;
  outline: none;
  padding: 0px 10px;
  font-family: ${get("fonts.body")};
  color: ${get("colors.black")};
  font-size: ${get("fontSize.sm")};
  transition: 0.25s;
  flex-grow: 1;
  resize: none;

  &:focus {
    border-color: ${get("colors.primary")};
    ${get("components.textarea.focus")}
  }

  &.is-invalid {
    color: ${get("colors.invalid")};
    border-color: ${get("colors.invalid")};
    ${get("components.textarea.invalid")}
  }

  &.is-valid {
    color: ${get("colors.valid")};
    border-color: ${get("colors.valid")};
    ${get("components.textarea.valid")}
  }

  &.has-before-icon {
    padding-left: 30px;
    ${get("components.textarea.beforeIcon")}
  }

  &.capitalize {
    text-transform: capitalize;
    ${get("components.textarea.capitalize")}
  }

  ${get("components.textarea")}
`

export default Textarea
