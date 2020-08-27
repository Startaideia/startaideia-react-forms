import styled from "styled-components"
import { get } from "theme"

const Message: any = styled.p`
  margin: 5px 0;
  display: block;
  color: ${get("colors.black")};
  font-family: ${get("fonts.body")};
  padding: 0;
  font-size: ${get("fontSize.xs")};

  &.is-invalid {
    color: ${get("colors.invalid")};
    ${get("components.message.invalid")}
  }

  &.is-valid {
    color: ${get("colors.valid")};
    ${get("components.message.valid")}
  }

  ${get("components.message")}
`

export default Message
