import styled from "styled-components"
import { get, getColor } from "theme"

const Label: any = styled.label`
  margin-bottom: 5px;
  display: block;
  color: ${getColor};
  font-family: ${get("fonts.body")};
  font-weight: bold;
  font-size: ${get("fontSize.sm")};
`

export default Label
