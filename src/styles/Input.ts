import styled from "styled-components"
import { get, getColor } from "theme"

const Input: any = styled.input`
  width: 100%;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 0px;
  outline: none;
  padding: 0px 10px;
  font-family: ${get("fonts.body")};
  border: 1px solid ${getColor};
  color: ${getColor};

  &:focus {
    border-color: ${get("colors.primary")};
  }
`

export default Input
