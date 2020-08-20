import styled from "styled-components"
import { get } from "theme"

const Button: any = styled.button`
  font-family: ${get("fonts.body")};
  border: 1px solid #ccc;
  background: #e6e6e6;
  outline: none;
  padding: 6px 20px;
  font-size: 14px;
  margin-top: 5px;
`

export default Button
