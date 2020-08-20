import styled from "styled-components"
import { get, getColor } from "theme"

const Message: any = styled.p`
  margin: 5px 0;
  display: block;
  color: ${getColor};
  font-family: ${get("fonts.body")};
  padding: 0;
  font-size: ${get("fontSize.xs")};
`

export default Message
