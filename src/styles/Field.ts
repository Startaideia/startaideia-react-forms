import { get } from "theme"
import styled from "styled-components"

const Field: any = styled.div`
  padding-top: 8px;
  position: relative;
  display: flex;
  flex-direction: column;

  .icon-container {
    position: absolute;
    right: 0;
    bottom: 2px;
    font-size: ${get("fontSize.lg")};
    color: ${get("colors.black")};
    height: 30px;
    min-width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:focus {
      border-color: ${get("colors.primary")};
    }

    &.is-invalid {
      color: ${get("colors.invalid")};
    }

    &.is-valid {
      color: ${get("colors.valid")};
    }

    &.has-before-icon {
      left: 0;
      right: inherit;
    }
  }
`

export default Field
