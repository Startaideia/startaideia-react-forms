import styled from "styled-components"
import { get } from "theme"

const Button: any = styled.button`
  font-family: ${get("fonts.body")};
  border: 1px solid ${get("colors.primary")};
  background: ${get("colors.primary")};
  color: ${get("colors.white")};
  font-weight: bold;
  outline: none;
  padding: 8px 20px;
  font-size: ${get("fontSize.sm")};
  margin-top: 5px;
  border-radius: 5px;
  transition: ease 0.25s;

  &:hover {
    cursor: pointer;
    ${get("components.button.hover")}
  }

  &:active {
    transform: scale(1.05);
    ${get("components.button.active")}
  }

  &:disabled {
    opacity: 0.5;
    ${get("components.button.disabled")}
  }

  ${get("components.button")};
`

export default Button
