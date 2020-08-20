import styled from "styled-components"
import { get } from "theme"

const Label: any = styled.label`
  margin-bottom: 5px;
  display: block;
  color: ${get("colors.black")};
  font-family: ${get("fonts.body")};
  font-weight: bold;
  font-size: ${get("fontSize.sm")};

  &.has-focus {
    color: ${get("colors.primary")};
  }

  &.is-invalid {
    color: ${get("colors.invalid")};
  }

  &.is-valid {
    color: ${get("colors.valid")};
  }
`

export default Label
