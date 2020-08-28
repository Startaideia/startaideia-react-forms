import { get } from "theme"
import styled from "styled-components"

const Field: any = styled.div`
  padding-top: 8px;
  position: relative;
  display: flex;
  flex-direction: column;

  .hoverble:hover {
    cursor: pointer;
  }

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
      ${get("components.field.icon.focus")}
    }

    &.is-invalid {
      color: ${get("colors.invalid")};
      ${get("components.field.icon.invalid")}
    }

    &.is-valid {
      color: ${get("colors.valid")};
      ${get("components.field.icon.valid")}
    }

    &.has-before-icon {
      left: 0;
      right: inherit;
      ${get("components.field.icon.before")}
    }

    ${get("components.field.icon")}
  }

  ${get("components.field")}
`

export default Field
